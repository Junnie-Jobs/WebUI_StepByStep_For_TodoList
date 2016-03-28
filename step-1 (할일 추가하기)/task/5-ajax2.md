# Task
[API을 활용](https://github.com/NHNNEXT/2016-01-Web-UI-Adv/wiki/server-%EC%A0%95%EB%B3%B4)하여 완료하기와 삭제하기를 ajax로 서버와 연동한다.

## [과제 영상](http://portal.nhnnext.org/streaming/2016/1%ED%95%99%EA%B8%B0/jQuery%EB%A1%9C%20TODO%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0./%EC%A0%84%EC%9A%A9%EC%9A%B0/671)

## 완료하기/삭제하기
- [ ] 완료하기를 누르면 Ajax로 서버에 상태값이 변경된다.(complete: 0은 미완료, 1은 완료)
	- [ ] **새로 고침할 경우** 완료된 todo에 checkbox는 checked가 들어가 있어야 하고, li에 class로 complete가 추가되어야 한다.
	- [ ] **새로 추가된 todo**에도 새로 고침과 같이 완료하기는 동작해야 한다.
- [ ] 삭제하기를 누르면 Ajax로 서버에 상태값이 변경된다.
	- [ ] **새로 고침할 경우** 삭제된 데이터를 보이지 않아야 한다.
	- [ ] **새로 추가된 todo**에도 삭제하기는 동작해야 한다.

# 사전 지식
## jQuery
- [Ajax](/unit/jquery/unit/ajax)
- [prop/attr](/unit/jquery/unit/attr)
- [data](/unit/jquery/unit/attr)
