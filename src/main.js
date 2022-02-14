// @ts-check
// 프레임워크 없이 간단한 토이프로젝트 웹 서버 만들기

/**
 * 블로그 포스팅 서비스
 *
 * - 로컬 파일을 DB로 활용 예정 (JSON)
 * - 인증 로직 제외
 * - RESTful API를 사용
 */

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('hello')
})
