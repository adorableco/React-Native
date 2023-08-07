// 그럴듯한 가짜 데이터를 생성하는 코드

export type IPerson = {
  id: string
  createDate: Date
  modifiedDate: Date
  name: string
  email: string
  avatar: string
  image: string
  comments: string
  counts: {
    comment: number
    retweet: number
    heart: number
  }
}
