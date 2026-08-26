# 배열과 튜플

## 목표

길이가 자유로운 배열과 위치가 정해진 readonly 튜플을 구분합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 배열과 튜플 값의 타입이 모두 `unknown`이어서 시작 검사는 실패합니다.
- `test-cases.ts`: 목록은 배열, 고정된 위치는 readonly 튜플로 표현했는지 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `cartIds`, `sizeMatrix`, `discountGroups`를 요소 타입에 맞는 배열로 선언합니다.
2. `point`, `coordinate`를 숫자 두 개의 readonly 튜플로, `orderLine`을 문자열·숫자·불린 순서의 readonly 튜플로 선언합니다.

## 확인 방법

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/02/10-arrays-tuples
```

수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다. 배열과 튜플의 타입이 기대와 일치하면 종료 코드 `0`과 `PASS: practices/02/10-arrays-tuples`가 표시됩니다. 풀이를 마친 뒤에만 `answers/template.ts`와 비교합니다.
