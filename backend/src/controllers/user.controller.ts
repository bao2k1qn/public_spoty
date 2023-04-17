import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../models/User.model';
import { AppError } from '../utils/appError';
import { catchAsync } from '../utils/catchAsync';

export const getAllUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();

    res.status(StatusCodes.OK).json({
        status: 'success',
        data: {
            users,
        },
    });
});

export const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { name, dateOfBirth, gender, address } = req.body;
    const user = await User.findOneAndUpdate({ _id: res.locals.user._id }, { name, dateOfBirth, gender, address });
    if (!user) return next(new AppError(400, 'Update failly'));

    res.status(StatusCodes.OK).json({
        status: 'success',
        data: {
            user,
        },
    });
});

export const getUserByPhone = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const {phone} = req.params;
    const user = await User.findOne({phone: phone});

    res.status(StatusCodes.OK).json({
        status: 'success',
        data: {
            user,
        },
    });
});