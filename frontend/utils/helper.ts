export const getFirstLetter = (str: string): string => {
    const lastname = str.split(' ').at(-1);
    return lastname ? lastname[0] : 'NaN';
};
