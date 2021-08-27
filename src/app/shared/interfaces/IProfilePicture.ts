export interface IProfilePicture {
    email: string,
    password: string,
    pictures: [
        {
            _id: string,
            image: string,
            description: string,
            userId: string,
            username: string
        }
    ],
    username: string,
    _id: string
}