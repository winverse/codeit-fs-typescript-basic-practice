# 타입을 정하는 법

## 목표

타입 추론에 맡겨도 되는 자리와 타입을 직접 선언해야 하는 자리를 구분합니다.

## 시작하기

저장소 루트에서 의존성을 설치합니다.

```bash
pnpm install
```

## 수정할 파일과 시작 상태

- `template.ts`: 초깃값이 있는 변수와 나중에 값이 할당되는 변수가 함께 있습니다. 나중에 값이 할당되는 변수의 타입이 암시적 `any`여서 시작 검사는 실패합니다.
- `test-cases.ts`: 각 변수의 최종 타입을 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. 초깃값이 있는 `productId`, `price`, `membersOnly`, `courseName`, `lessonCount`는 타입 추론을 유지합니다.
2. 나중에 값이 할당되는 `managerName`, `maxStudents`, `isClosed`, `classroomLabel`, `currentWeek`, `hasHomework`에 값과 맞는 타입을 직접 선언합니다.

## 확인하기

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/02/04-type-annotation
```

## 성공 기준

- 수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다.
- 모든 변수의 타입이 기대와 일치하면 종료 코드 `0`과 `PASS: practices/02/04-type-annotation`이 표시됩니다.

## 정답과 비교하기

직접 풀이하고 확인한 뒤 `answers/template.ts`와 비교합니다.
