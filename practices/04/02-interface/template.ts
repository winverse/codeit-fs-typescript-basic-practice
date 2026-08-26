export interface Course {
  // TODO: 값에 맞는 프로퍼티 타입으로 unknown을 바꾸세요.
  id: unknown;
  // TODO: 값에 맞는 프로퍼티 타입으로 unknown을 바꾸세요.
  title: unknown;
  // TODO: 값에 맞는 프로퍼티 타입으로 unknown을 바꾸세요.
  price: unknown;
  // TODO: 값에 맞는 선택 프로퍼티 타입으로 unknown을 바꾸세요.
  published?: unknown;
}

export const course: Course = {
  id: "ts-101",
  title: "TypeScript 시작하기",
  price: 39_000,
  published: true,
};

export interface OnlineCourse extends Course {
  // TODO: 값에 맞는 프로퍼티 타입으로 unknown을 바꾸세요.
  streamingHours: unknown;
}

export const onlineCourse: OnlineCourse = {
  id: "ts-201",
  title: "TypeScript 실전",
  price: 59_000,
  streamingHours: 12,
};

// 추가 문제
export interface Account {
  // TODO: 값에 맞는 프로퍼티 타입으로 unknown을 바꾸세요.
  id: unknown;
  // TODO: 값에 맞는 프로퍼티 타입으로 unknown을 바꾸세요.
  email: unknown;
  // TODO: 값에 맞는 선택 프로퍼티 타입으로 unknown을 바꾸세요.
  displayName?: unknown;
}

export const account: Account = {
  id: "u001",
  email: "creator@codeit.kr",
  displayName: "타입 크리에이터",
};

export interface CreatorAccount extends Account {
  // TODO: 값에 맞는 프로퍼티 타입으로 unknown을 바꾸세요.
  subscriberCount: unknown;
}

export const creatorAccount: CreatorAccount = {
  id: "u002",
  email: "streamer@codeit.kr",
  subscriberCount: 1200,
};
