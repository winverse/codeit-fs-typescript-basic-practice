# Enum

## 목표

정해진 값 목록을 문자열 Enum으로 표현합니다.

## 수정할 파일과 시작 상태

- `template.ts`: Enum 멤버 이름은 맞지만 일부 문자열 값이 문제의 계약과 달라 시작 검사는 실패합니다.
- `test-cases.ts`: 멤버 이름, 문자열 값, 변수와 함수 시그니처를 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `Size`의 문자열 값을 각각 `S`, `M`, `L`, `XL`로 바꿉니다.
2. `Direction`의 문자열 값을 각각 `UP`, `DOWN`, `LEFT`, `RIGHT`로 바꿉니다.
3. `productSize`, `moveDirection`과 두 출력 함수가 각 Enum 타입을 계속 사용하게 둡니다.

## 확인 방법

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/03/02-enum
```

수정 전에는 Enum 값 불일치 진단과 함께 종료 코드 `1`이 발생합니다. 모든 문자열 값과 시그니처가 맞으면 종료 코드 `0`과 `PASS: practices/03/02-enum`이 표시됩니다. 풀이를 마친 뒤에만 `answers/template.ts`와 비교합니다.
