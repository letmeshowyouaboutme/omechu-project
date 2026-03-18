# 오메추 프로젝트 - Claude Code 컨텍스트

## 프로젝트 한 줄 요약
오늘의 메뉴 랜덤 추천 웹사이트. 인스타그램 유입 → 광고 수익(AdSense) 구조.

## GitHub
`letmeshowyouaboutme/omechu-project`

## 기술 스택
- HTML + CSS + JS (프레임워크 없음)
- 호스팅: Vercel (자동배포, GitHub 연동)
- 이미지: Pollinations.ai (AI 생성, 무료, API 키 불필요)
- 도메인: omechu.com (미구매)

## 파일 구조
```
index.html      메인 페이지
style.css       스타일
script.js       메뉴 랜덤 추출 / 카드 렌더링 로직
menus.json      메뉴 데이터 167개 (한식70 / 일식40 / 중식20 / 양식22 / 기타15)
PATCHNOTE.md    작업 히스토리 상세 기록 (반드시 참고)
```

## menus.json 구조
```json
{
  "name": "김치찌개",
  "emoji": "🍲",
  "tags": ["한식", "국물"],
  "image": ""  // 비어있으면 이모지+그라디언트, URL 넣으면 사진 표시
}
```

## 현재 진행 상황
- v1.0 사이트 개발 완료
- v1.1 Vercel 배포 완료
- v1.2 메뉴 167개 확장 완료
- **v1.3 음식 사진 적용 작업 중** ← 현재 여기

## 다음 작업 (v1.3)
menus.json의 image 필드에 Pollinations.ai URL 채우기

```
URL 형식: https://image.pollinations.ai/prompt/{메뉴명} korean food photo realistic
```

script.js에서 image 필드가 비어있으면 이모지, URL 있으면 사진 표시하는 구조는 이미 구현되어 있음.

## 이후 TODO
1. v1.3: 음식 사진 적용 (Pollinations.ai)
2. v1.4: 인스타그램 프로필 링크 등록 + 첫 콘텐츠 게시
3. 도메인 구매 (omechu.com)
4. Google AdSense 신청 (트래픽 쌓인 후)

## 사업 구조
```
인스타그램 (복면정장 캐릭터 콘텐츠)
    ↓
음식사진 3장 + "오늘의 메뉴 추천" 게시
    ↓
프로필 링크 클릭 → omechu.com
    ↓
"메뉴 추천받기" 버튼 → 랜덤 메뉴 3개
    ↓
AdSense 광고 수익
```

## 주의사항
- 작업 전 PATCHNOTE.md 먼저 읽을 것
- 작업 완료 후 PATCHNOTE.md 업데이트 + GitHub 푸시할 것
- 기타(동남아/멕시코) 카테고리 필터 버튼은 아직 index.html에 없음 (추후 추가 필요)
