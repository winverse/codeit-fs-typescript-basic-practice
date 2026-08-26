// TODO: 현재 문자열 값만 허용하는 리터럴 타입으로 만드세요.
export let pinnedNotice = "공지";
export let currentNotice = "공지";

// TODO: 파라미터와 반환값을 "공지" 리터럴 타입으로 제한하세요.
export function printPinnedNotice(notice: string) {
  return notice;
}

// 추가 문제
// TODO: 현재 불린 값만 허용하는 리터럴 타입으로 만드세요.
export let freeShipping = true;
export let currentStep = 1;

// TODO: 파라미터와 반환값을 1 리터럴 타입으로 제한하세요.
export function acceptFirstStep(step: number) {
  return step;
}
