export type IGenericErrorMessage = {
    path: string | number;
    message: string;
};

export type IGenericErrorResponse = {
    status: number;
    data: { success: false; message: string; errorMessages: IGenericErrorMessage[] };
};

export type IGenericResponse<T> = {
    meta: {
        page: number;
        size: number;
        total: number;
        totalPage: number;
    };
    data: T;
};

export type Contact = {
    _id: string;
    name: string;
    email: string;
    phone_number: string;
    address: string;
    profile_picture: string;
    is_favorite: boolean;
};
