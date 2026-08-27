# 객체 타입

## 목표

필수·선택 프로퍼티와 인덱스 시그니처로 객체 구조를 표현합니다.

## 시작하기

저장소 루트에서 `practices/02/13-object-types` 실습을 선택해 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 객체가 모두 `unknown`으로 선언되어 있어 프로퍼티 구조를 검사할 수 없는 상태입니다.
- `test-cases.ts`: 책·회원 객체의 필수/선택 프로퍼티와 숫자 값 맵을 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `book`과 `ebook`에 공통 객체 타입을 지정하되 `discountRate`는 선택 프로퍼티로 둡니다.
2. `memberProfile`과 `guestProfile`에 공통 객체 타입을 지정하되 `nickname`은 선택 프로퍼티로 둡니다.
3. `stockByIsbn`과 `levelByCourse`를 문자열 키와 숫자 값을 갖는 인덱스 시그니처로 선언합니다.

## 확인하기

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/02/13-object-types
```

## 성공 기준

- 수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다.
- 객체 구조와 인덱스 시그니처가 기대와 일치하면 종료 코드 `0`과 `PASS: practices/02/13-object-types`가 표시됩니다.

## 정답과 비교하기

직접 풀이하고 확인한 뒤 `answers/template.ts`와 비교합니다.
