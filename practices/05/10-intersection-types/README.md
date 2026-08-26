# Intersection 타입

## 목표

여러 객체 타입의 조건을 하나의 타입으로 조합합니다.

## 수정할 파일과 시작 상태

- `template.ts`: 기본 타입은 `unknown`, 조합 타입은 `any`여서 객체가 충족해야 할 조건이 사라진 상태입니다.
- `test-cases.ts`: 공통 타입을 Intersection으로 조합했는지와 각 프로퍼티 타입을 검사하는 읽기 전용 파일입니다.

## 구현 내용

1. `Id`, `Timestamp`에 필요한 객체 구조를 선언하고 이를 사용해 `Product`, `User`를 Intersection 타입으로 만듭니다.
2. `Attacker`, `Defender`의 수치 프로퍼티를 숫자로 바꿉니다.
3. `BattleCharacter`를 공격·방어 계약과 이름 프로퍼티의 Intersection으로 만듭니다.

## 확인 방법

저장소 루트에서 다음 명령을 실행합니다.

```bash
pnpm run check -- practices/05/10-intersection-types
```

수정 전에는 타입 진단과 함께 종료 코드 `1`이 발생합니다. 모든 Intersection 타입과 프로퍼티가 기대와 일치하면 종료 코드 `0`과 `PASS: practices/05/10-intersection-types`가 표시됩니다. 풀이를 마친 뒤에만 `answers/template.ts`와 비교합니다.
