import { AxiosError } from 'axios';

export type ToFunctionReturnType<T> = [error: AxiosError<{ message: string }> | null, response: T | undefined];

export function to<T>(promise: Promise<T>): Promise<ToFunctionReturnType<T>> {
  return promise
    .then<[null, T]>((response: T) => [null, response])
    .catch<[AxiosError<{ message: '' }>, undefined]>((error) => [error, undefined]);
}

// await-to library function
// export function to<T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<[U | null, T | undefined]> {
//   return promise
//     .then<[null, T]>((data: T) => [null, data])
//     .catch<[U, undefined]>((err: U) => {
//       if (errorExt) {
//         Object.assign(err, errorExt);
//       }

//       return [err, undefined];
//     });
// }
