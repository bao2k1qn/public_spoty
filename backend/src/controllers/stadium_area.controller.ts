import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Stadium from '../models/Stadium.model';

import StadiumArea from '../models/Stadium_area.model';
import APIFeatures from '../utils/apiFeatures';
import { AppError } from '../utils/appError';
import { catchAsync } from '../utils/catchAsync';

export const createArea = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const owner_id = res.locals.user._id;
    const stadium = req.params.stadium;

    const stadiumOfOwner = await Stadium.findOne({ _id: stadium, user: owner_id });
    if (!stadiumOfOwner) return next(new AppError(StatusCodes.UNAUTHORIZED, 'The stadium is not belong to you!'));

    const { name, description, type, status, time_price, extra_infor, size, quantity, default_price } = req.body;

    // check time and price: ....?

    const area = await StadiumArea.create({
        name,
        description,
        type,
        status,
        time_price,
        extra_infor,
        default_price,
        size,
        quantity,
        stadium: stadiumOfOwner._id,
    });
    res.status(StatusCodes.CREATED).json({
        status: 'success',
        data: {
            area,
        },
    });
});

export const updateArea = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const owner_id = res.locals.user._id;
    const stadium = req.params.stadium;
    const area = req.params.area;

    const isStadiumOfOwner = await Stadium.findOne({ _id: stadium, user: owner_id });
    if (!isStadiumOfOwner) return next(new AppError(StatusCodes.UNAUTHORIZED, 'The stadium is not belong to you!'));

    const { name, description, type, status, time_price, extra_infor, size, quantity, default_price } = req.body;

    const updated_area = await StadiumArea.findOneAndUpdate(
        { _id: area },
        {
            name,
            description,
            type,
            status,
            time_price,
            extra_infor,
            default_price,
            size,
            quantity,
            stadium,
        },
        {
            new: true,
            runValidators: true,
        },
    );
    res.status(StatusCodes.CREATED).json({
        status: 'success',
        data: {
            updated_area,
        },
    });
});

export const getAllAreaOfStadium = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const areas = await StadiumArea.find({ stadium: req.params.id });

    res.status(StatusCodes.OK).json({
        status: 'success',
        data: {
            areas,
        },
    });
});

export const deleteArea = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const owner_id = res.locals.user._id;
    const stadium = req.params.stadium;
    const area = req.params.area;

    const isStadiumOfOwner = await Stadium.findOne({ _id: stadium, user: owner_id });
    if (!isStadiumOfOwner) return next(new AppError(StatusCodes.UNAUTHORIZED, 'The stadium is not belong to you!'));

    const resArea = await StadiumArea.findOneAndUpdate(
        { _id: area },
        {
            deleteAt: new Date(Date.now()),
        },
    );
    if (!resArea) return next(new AppError(StatusCodes.BAD_REQUEST, 'Delete the stadium faily!'));

    res.status(StatusCodes.CREATED).json({
        status: 'success',
        message: 'delete successfull',
    });
});
