// 1. 기본 props구조 분해할당 vs props객체
export function PropsExample() {
  return (
    <div style={{ padding: "20px", border: "2px solid #ddd", margin: "10px" }}>
      <h3>props 받는 방법 2가지</h3>
      {/* 1.구조 분해 할당 (권장) */}
      <Method1 name="김철수" age={20} />
      <Method2 name="박수지" age={25} />
      {/* 2. props객체 */}
    </div>
  );
}
//   구조분해 할당 (권장)
function Method1({ name, age }) {
  return (
    <div>
      <h4>1. 구조분해할당</h4>
      <p>
        이름:{name} 나이:{age}
      </p>
    </div>
  );
}
// 2. props객체
function Method2(props) {
  return (
    <div>
      <h4>2. props 객체</h4>
      <p>
        이름:{props.name} 나이:{props.age}
      </p>
    </div>
  );
}
// 2. 기본값 설정
export function DefaultProps() {
  return (
    <div style={{ padding: "20px", border: "2px solid #ddd", margin: "10px" }}>
      <h3>기본값 설정(Default Props)</h3>
      <UserCard name="김철수" />
      <UserCard name="이영희" age={20} />
      <UserCard name="이영지" age={27} city="대구" />
    </div>
  );
}

// 구조분해할당
function UserCard({ name, age = 20, city = "서울" }) {
  return (
    <div
      style={{
        backgroundColor: "#e8f5e8",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}>
      <h4>사용자 정보</h4>
      <p>이름 : {name}</p>
      <p>나이: {age}세</p>
      <p>사는곳: {city}</p>
    </div>
  );
}

// 3. 조건부 렌더링
export function ConditionalProps() {
  return (
    <div style={{ padding: "20px", border: "2px solid #ddd", margin: "10px" }}>
      <h3>조건부 렌더링</h3>
      <StatusCard status="online" message="안녕하세요!" />
      <StatusCard status="offline" message="자리 비움" />
      <StatusCard status="busy" message="바빠요!" />
    </div>
  );
}
function StatusCard({ status, message }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "#4CAF50";
      case "offline":
        return "#f44336";
      case "busy":
        return "#FF9800";
      default:
        return "#9E9E9E";
    }
  };
  const getStatusEmoji = (status) => {
    switch (status) {
      case "online":
        return "🟢";
      case "offline":
        return "🔴";
      case "busy":
        return "🟡";
      default:
        return "⚪";
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        border: `3px solid ${getStatusColor(status)}`,
      }}>
      <h4>
        {getStatusEmoji(status)}상태 : {status}{" "}
      </h4>
      <p>{message}</p>
      {status === "online" && <p style={{ color: "green" }}>💬 메시지 보내기 가능</p>}
      {status === "offline" && <p style={{ color: "red" }}>⏰ 나중에 다시 시도해주세요</p>}
      {status === "busy" && <p style={{ color: "orange" }}>⏳ 잠시만 기다려주세요</p>}
    </div>
  );
}

// 4. 배열과 객체 props
export function ComplexProps() {
  const student = [
    {
      name: "김철수",
      scores: [85, 92, 78, 95],
      subjects: ["수학", "영어", "과학", "국어"],
    },
    {
      name: "이영희",
      scores: [85, 92, 78, 95],
      subjects: ["수학", "영어", "과학", "국어"],
    },
  ];
  const teacher = [
    {
      name: "이선생님",
      subjects: ["수학", "물리"],
      experience: 10,
    },
    {
      name: "하선생님",
      subjects: ["미술", "음악"],
      experience: 20,
    },
  ];

  return (
    <div style={{ padding: "20px", border: "2px solid #ddd", margin: "10px" }}>
      <h3>복잡한 props(객체, 배열)</h3>
      <ScoreCard student={student} />
      <TeacherCard teacher={teacher} />
    </div>
  );
}

function ScoreCard({ student }) {
  // reduce() 메서드는 배열의 각 요소를 순회하며 콜백함수를 호출하여 하나의 값으로 만드는 것.
  // const average = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
  return (
    <div
      style={{
        backgroundColor: "#e1f5fe",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}>
      {/* 한명의 학생의 정보만 불러올 때 형식 */}
      {/* <h4>{student.name}의 성적표</h4>
      <div>
        {student.subjects.map((subject, index) => (
          <p key={index}>
            {subject}:{student.scores[index]}점
          </p>
        ))}
      </div>
      <p style={{ fontWeight: "bold", color: "#1976d2" }}>평균 : {average.toFixed(1)}점</p> */}

      {/* 여러명의 학생 정보를 불러올 때 형식 */}
      {student.map((student, index) => (
        <div key={index}>
          <h4>{student.name}의 성적표</h4>
          <p key={index}>
            {student.subjects[index]}:{student.scores[index]}점
          </p>
          <p>평균 : {student.scores.reduce((a, b) => a + b, 0) / student.scores.length.toFixed(1)}점</p>
        </div>
      ))}
    </div>
  );
}
function TeacherCard({ teacher }) {
  return (
    <div
      style={{
        backgroundColor: "#fff3e0",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}>
      {/* <h4>{teacher.name}</h4>
      <p>담당 과목 : {teacher.subjects.join("/")}</p>
      <p>경력 : {teacher.experience}년</p> */}
      {teacher.map((teacher, index) => (
        <div>
          <h4 key={index}>{teacher.name}</h4>
          <p>담당 과목 : {teacher.subjects.join("/")}</p>
          <p>경력 : {teacher.experience}년</p>
        </div>
      ))}
    </div>
  );
}
