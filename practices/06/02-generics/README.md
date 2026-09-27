# 제네릭

## 목표

구조는 유지하면서 사용할 때 타입을 채우는 함수와 Interface를 작성합니다.

## 시작하기

저장소 루트에서 `practices/06/02-generics` 실습을 선택해 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 함수와 제네릭 Interface 내부가 `any`라 호출할 때 전달한 타입 정보가 유지되지 않습니다.
- `test-cases.ts`: 숫자와 문자열을 각각 넣었을 때 입력 타입이 반환값과 프로퍼티에 보존되는지 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `wrapInArray`, `getFirstValue`, `pickLast`에 타입 파라미터를 추가해 입력 타입을 반환 타입에 연결합니다.
2. `ApiEnvelope<T>`의 `data`와 `Box<T>`의 `value`가 각 타입 파라미터를 사용하게 바꿉니다.
3. 배열의 첫 값과 마지막 값이 없을 수 있으므로 반환 타입에 `undefined` 가능성이 유지되게 합니다.

## 확인하기

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/06/02-generics
```

## 성공 기준

- 수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다.
- 숫자·문자열 호출의 타입이 각각 유지되면 종료 코드 `0`과 `PASS: practices/06/02-generics`가 표시됩니다.

## 정답과 비교하기

직접 풀이하고 확인한 뒤 `answers/template.ts`와 비교합니다.
