# TypeScript 기본 연습문제

이 저장소는 34. TypeScript 기본 강의의 로컬 `#실습` 12개와 연결된 문제 해결 연습 저장소입니다.

## 시작하기

```bash
pnpm install
```

각 실습의 `README.md`를 읽고 `template.ts`를 수정합니다. 예를 들어 타입을 정하는 법 실습은 다음 명령으로 확인합니다.

```bash
pnpm run check -- practices/02/04-type-annotation
```

풀이 전 시작 상태는 의도적으로 타입 검사에 실패합니다. 전체 시작 상태와 정답은 다음 명령으로 각각 확인할 수 있습니다.

```bash
pnpm run check:starts
pnpm run check:answers
```

정답은 각 실습의 `answers/template.ts`에 있으며, 문제를 푼 뒤에만 확인합니다. `answers/test-cases.ts`는 정답을 독립적으로 검사하는 진입점입니다.
