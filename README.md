# TypeScript 기본 연습문제

이 저장소는 `TypeScript 기본` 강의의 연습문제 12개를 담고 있습니다.

## 시작하기

```bash
pnpm install
```

각 실습 폴더의 `README.md`를 읽고 `template.ts`를 수정한 뒤, 저장소 루트에서 확인 명령을 실행합니다. 예를 들어 타입을 정하는 법 실습은 다음 명령으로 확인합니다.

```bash
pnpm run check -- practices/02/04-type-annotation
```

모든 타입이 맞으면 `PASS: practices/02/04-type-annotation`이 표시됩니다.

풀이 전 시작 상태는 의도적으로 타입 검사에 실패합니다. 다음 명령을 실행해 `start checks: 12/12`가 표시되면 12개 문제가 모두 풀이 전 상태로 준비된 것입니다.

```bash
pnpm run check:starts
```

정답은 각 실습의 `answers/template.ts`에 있으며, 문제를 푼 뒤에만 확인합니다.
