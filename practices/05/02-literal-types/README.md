# 리터럴 타입

## 목표

리터럴 타입과 넓어진 원시 타입의 차이를 확인합니다.

## 시작하기

저장소 루트에서 `practices/05/02-literal-types` 실습을 선택해 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 모든 값이 일반 `let`과 넓은 파라미터 타입으로 선언되어 있어 고정해야 할 리터럴까지 넓게 추론됩니다.
- `test-cases.ts`: 고정할 값은 리터럴 타입으로, 바뀔 값은 넓은 원시 타입으로 남았는지 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `pinnedNotice`와 `freeShipping`은 각각 현재 값만 허용하는 리터럴 타입으로 만듭니다.
2. `currentNotice`와 `currentStep`은 나중에 다른 값도 받을 수 있도록 `string`, `number`를 유지합니다.
3. `printPinnedNotice`와 `acceptFirstStep`은 지정된 리터럴만 받고 같은 리터럴을 반환하게 선언합니다.

## 확인하기

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/05/02-literal-types
```

## 성공 기준

- 수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다.
- 리터럴 타입과 넓은 타입이 기대와 일치하면 종료 코드 `0`과 `PASS: practices/05/02-literal-types`가 표시됩니다.

## 정답과 비교하기

직접 풀이하고 확인한 뒤 `answers/template.ts`와 비교합니다.
