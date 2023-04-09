// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }

// interface Story {
//     createStory(): number
// }

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) { }
// }

// class YouTube implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string,
//     ) { }

//     createStory(): number {
//         return 2
//     }
// }