# 기본형

## 목표

string, number, boolean, undefined, null을 실제 값과 연결합니다.

## 시작하기

저장소 루트에서 `practices/02/07-primitives` 실습을 선택해 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 모든 값의 타입이 `unknown`으로 선언되어 있어 시작 검사는 실패합니다.
- `test-cases.ts`: 각 값이 기대하는 원시 타입인지 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. 문자열 값은 `string`, 숫자와 `NaN`·`Infinity`는 `number`, 참·거짓 값은 `boolean`으로 바꿉니다.
2. 값이 `undefined`인 변수는 `undefined`, 값이 `null`인 변수는 `null`로 바꿉니다.

## 확인하기

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/02/07-primitives
```

## 성공 기준

- 수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다.
- 모든 값의 타입이 기대와 일치하면 종료 코드 `0`과 `PASS: practices/02/07-primitives`가 표시됩니다.

## 정답과 비교하기

직접 풀이하고 확인한 뒤 `answers/template.ts`와 비교합니다.
