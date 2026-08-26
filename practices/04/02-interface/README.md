# Interface

## 목표

공통 객체 구조를 Interface로 정의하고 확장합니다.

## 수정할 파일과 시작 상태

- `template.ts`: Interface 프로퍼티가 `unknown`이라 객체가 가진 구체적인 계약을 표현하지 못합니다.
- `test-cases.ts`: 기본 Interface의 프로퍼티와 확장 Interface에 추가한 프로퍼티를 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `Course`의 `id`, `title`, `price`, `published`를 값과 맞는 타입으로 바꿉니다.
2. `OnlineCourse`가 추가하는 `streamingHours`를 숫자로 지정합니다.
3. `Account`와 이를 확장한 `CreatorAccount`의 프로퍼티를 값과 맞는 타입으로 바꿉니다.

## 확인 방법

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/04/02-interface
```

수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다. 기본·확장 Interface가 기대와 일치하면 종료 코드 `0`과 `PASS: practices/04/02-interface`가 표시됩니다. 풀이를 마친 뒤에만 `answers/template.ts`와 비교합니다.
