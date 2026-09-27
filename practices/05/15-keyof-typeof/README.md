# keyof와 typeof 연산자

## 목표

값에서 타입을 가져오고 객체 타입에서 키 이름의 Union 타입을 추출합니다.

## 시작하기

저장소 루트에서 `practices/05/15-keyof-typeof` 실습을 선택해 진행합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 값에서 가져올 타입과 키 타입이 `any`라 잘못된 키도 제한하지 못합니다.
- `test-cases.ts`: `typeof`로 가져온 객체 타입, `keyof`로 만든 키 Union, 인덱스 접근 결과를 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `BookFromValue`를 `book` 값의 타입으로, `BookKey`를 그 타입의 키 Union으로 만듭니다.
2. `FilterFromValue`와 `FilterKey`도 `filter` 값에서 같은 방식으로 만듭니다.
3. 키 배열과 두 읽기 함수가 새 타입을 그대로 사용하게 둡니다.

## 확인하기

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/05/15-keyof-typeof
```

## 성공 기준

- 수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다.
- 값 타입·키 Union·인덱스 접근 결과가 기대와 일치하면 종료 코드 `0`과 `PASS: practices/05/15-keyof-typeof`가 표시됩니다.

## 정답과 비교하기

직접 풀이하고 확인한 뒤 `answers/template.ts`와 비교합니다.
