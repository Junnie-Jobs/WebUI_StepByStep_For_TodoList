# event delegation
엘리먼트에 이벤트를 바인딩하여 이벤트 콜백에서 작업을 주로 합니다. 일반적인 방법으로 엘리먼트가 추가되거나 삭제될 때, 이벤트를 추가하거나 삭제하도록 이벤트을 관리합니다. 이 작업은 생각보다 귀찮은 작업으로 이를 해소하고자 event delegation기법을 활용한다.
event delegation은 상위에 있는 엘리먼트에 이벤트를 바인딩하여 이벤트 처리를 위임하고, 하위 엘리먼트에서 이벤트가 버블링되면 이벤트를 분석하여 이벤트들을 관리하는 기법이다.
이 영상은 기존의 방식을 event delegation으로 변경하고 event delegation의 유의점을 알아보는 클립입니다.

## [과제 영상](http://portal.nhnnext.org/streaming/2016/1%ED%95%99%EA%B8%B0/FE%20%EA%B8%B0%EB%B3%B8/%EC%A0%84%EC%9A%A9%EC%9A%B0/657)

## 학습하는 내용
	- 기존의 방식
	- event delegation
	- 주의점

## 관련 링크
- [jQuery on](http://api.jquery.com/on/#on-events-selector-data-handler)
