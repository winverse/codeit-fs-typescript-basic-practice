# Union 타입

## 목표

여러 후보 타입과 허용 가능한 리터럴 값의 집합을 표현합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 네 타입 별칭이 `any`라 허용할 후보를 제한하지 못합니다.
- `test-cases.ts`: 객체 타입 Union과 리터럴 Union의 정확한 구성원을 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `FeaturedProduct`를 의류와 신발 상품의 Union으로, `ClothingSizeOption`을 `S`, `M`, `L`, `XL`의 Union으로 만듭니다.
2. `Benefit`을 쿠폰과 기프트카드의 Union으로 만듭니다.
3. `BenefitState`를 `ready`, `active`, `expired`의 Union으로 만듭니다.

## 확인 방법

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/05/07-union-types
```

수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다. 네 Union 타입이 기대와 일치하면 종료 코드 `0`과 `PASS: practices/05/07-union-types`가 표시됩니다. 풀이를 마친 뒤에만 `answers/template.ts`와 비교합니다.
