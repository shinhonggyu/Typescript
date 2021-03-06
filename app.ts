export {}; // 로컬모듈
// 타입 추론 (Type Inference)
// 타입표기가 없는경우 타입 유추
let a = 5;
// a = "hello"; 에러

let student = {
  name: "Jake",
  course: "Getting Started with TS",
  codingIQ: 80,
  code: function () {
    console.log("brain is working hard");
  },
};

student.name = 10;

// 파라미터 타입을 안줬지만 리턴값 추론
function calculateCodingIQ(lostPoints) {
  return 100 - lostPoints;
}


// ------------------------------------------



// 타입 명시
// Type에관한 정보를 TS에게 많이줄수록 좋다⭐
// 좀더 세부적이고 자세하게 타입명시
// 실제로 반환하는 객체의 구조
let studentID: number = 12345;
let studentName: string = "jenny kim";
let courseCompleted: boolean = false;

function getStudentDetails(studentID: number): {
  // 반환되는 객체의 구조를 타입으로 지정
  studentID: number;
  studentName: string;
  courseCompleted: boolean;
} {
  return null;
}

// --------------------------------------------------

// 정해진값들만 가질수있도록하는 Enum & Literal type
// 열거형 Enum 연관된 아이템들을 함께 묶어서 표현
enum Gender {
  // 숫자형 열거형에서 문자열 열거형
  // 선택지
  Male2 = "Male",
  Female2 = "Female",
}

// 인터페이스로 객체의 구조를 정의
// 인터페이스를 타입으로 가지는 값은
// 인터페이스 내에 정의된 구조를 그 값으로 가지도록 강제된다
interface Student {
  // property(속성)정의
  readonly studentID: number;
  studentName: string;
  courseCompleted: boolean;
  age?: number;
  gender: Gender;
  // 리터럴 타입
  grade: "A" | "B" | "C";
  // 메소드 정의
  // addComment (comment: string): string;
  addComment?: (comment: string) => string;
}

function getStudentDetails2(studentID: number): Student {
  // 인터페이스 Student에 정의된 속성들을 가져야한다
  return {
    studentID: 123,
    studentName: "Mark Jacobs",
    courseCompleted: true,
    gender: Gender.Male2,
    grade: "B",
  };
}

// 반복되는 코드를 피한다⭐
function saveStudentDetails(student: Student): void {
  student.studentID = 31; // readOnly
}

let student1: Student = {
  studentID: 123,
  studentName: "Jackson",
  courseCompleted: false,
  age: 31,
  gender: Gender.Female2;
  grade: "C",
};

saveStudentDetails(student1);



// -----------------------------------------------

// Any, Union Type, Type Aliases & Type Guards

// 유니언 타입
// 제한된 타입들을 동시에 지정 하고 싶을때
let price: number | string = 5;
price = 'free'
price = true;


// Type Aliases
// 같은 조합이 계속 반복될 경우
// 코드를 타입으로 지정하고 재활용!
// type 키워드를 사용해 새로운type을 선언
type StrOrNum = number | string;
let itemPrice: number;

// 타입가드
// typeof 연산자와 조건문 사용
const setItemPrice = (price: StrOrNum):void => {
  if (typeof price === 'string') {
    itemPrice = 0
  } else {
    itemPrice = price
  }
}

setItemPrice(50)


// ------------------------------------------


// 함수의 타이핑, 선택적 매개변수와 기본매개변수
// 선택적 매개변수는 가장뒤에, 아니면 뒤에모두 optional이 된다.
// default paremeter 를 쓰므로 선택적 매개변수?를 지워주고 타입도 지움으로써 타입추론
function sendGreeting(message: string, userName = 'there' ): void {
  console.log(`${message}, ${userName}`) 
}

sendGreeting('Hello')


// ---------------------------------------------------------



// OOP, 클라스와 오브젝트
// 연관된 변수와 함수들을 한 덩어리(객체)로 묶어서
// 구조화하여 표현하는 프로그래밍 스타일

// 어플리케이션을 실제 세상에 존재하는 객체와 같은 단위로 쪼개고
// 객체들이 서로 상호 작용 함으로써 시스템이 동장

// 클라스는 객체의 뼈대, 설계도, 생산틀

class Employee {
  // Access Modifiers
  // 클라스 속 멤버 변수(프로퍼티)와 메소드에 적용
  // 클라스 외부로 부터의 접근을 통제
  // 멤버변수, 클라스 내에서 this 통해 접근가능!
  fullName: string;
  age: number;
  jobTitle: string;
  hourlyRate: number;
  workingHoursPerWeek: number;

  printEmployeeDetails = (): void => {
    console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일
    수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
  }
}

let employee1 = new Employee();
employee1.fullName = '민수';
employee1.age = 31;
employee1.jobTitle = '주니어 웹개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails()



// -------------------------------------------------------------------------


// 생성자 (Constructor), 접근 제한자 (Access Modifiers), Getter와 Setter
// Constructor는 클라스로부터 객체를 생성할때, 호출되며 객체의 초기화를 담당.
// Public : 클라스의 외부에서 접근 가능
// Private: 클라스 내에서만 접근가능, 클라스 외부에서 접근불가능
// Protected: 클라스 내부, 그리고 상속받은 자식 클라스에서 접근가능
class Employee2 {

  // 선택적 매개변수는 가장뒤에, 아니면 뒤에모두 optional이 된다.
  // Constructor 의 매개변수에 Access Modifiers를 직접 적용
  // 접근제한자가 사용된 Constructor 파라미터는 암묵적으로 
  // 멤버변수로 선언된다
  // 객체가 생성될때 컨스트럭터의 매개변수로 전달된 값은
  // 객체의 프로퍼티 값으로 자동으로 그 값이 초기화되고 할당됨.
  constructor(
    private _fullName: string, 
    private _age: number, 
    private _jobTitle: string, 
    private _hourlyRate: number, 
    public workingHoursPerWeek: number) {
  }

  printEmployeeDetails = (): void => {
    console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일
    수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
  }
  
// 비공개로 설정된 객체의 멤버변수에 접근하여 값을 읽거나 쓰기위해서
// Get과 Set 키워드를 사용하여 Getter와 Setter를 선언
  get fullName () {
    //getter가 불러질때 실행될코드
    return this._fullName;
  }

  set fullName (value: string) {
    this._fullName = value
  }

}

let employee2: Employee2 = new Employee2('홍규', 31, '주니어 개발자', 40, 35)
employee2.fullName = '헨리'
console.log(employee2.fullName) // 헨리
employee2.printEmployeeDetails();

// 비공개로 설정된 객체의 멤버변수에 접근하여 값을 읽거나 쓰기위해서
// Get과 Set 키워드를 사용하여 Getter와 Setter를 선언
