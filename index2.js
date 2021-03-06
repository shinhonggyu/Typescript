var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//π§‘ --- ν¨μ rest νλΌλ―Έν°, destructuring ν  λ νμμ§μ 
var person = { student: true, age: 20 };
function ν¨μ1(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
ν¨μ1(person);
// (μμ¬1) μ΅λκ° return
function μ΅λκ°() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var max = 0;
    rest.forEach(function (item) {
        if (max < item) {
            max = item;
        }
    });
    return max;
}
function desc2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user);
    console.log(comment);
    console.log(admin);
}
desc2({ user: "kim", comment: [3, 5, 4], admin: false });
function ν¨μ(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
ν¨μ([40, "wine", false]);
//π§‘ --- Narrowing ν  μ μλ λ°©λ² λ μμλ³΄κΈ° ---
// μ€μ λ‘ κ°λ°ν  λ μ΄λ€ λ³μλ ν¨μνλΌλ―Έν°μ null, undefinedκ° λ€μ΄μ¬ κ²½μ°
// μ΄λ»κ² λμ²ν μ§ ifλ¬ΈμΌλ‘ μ½λμ§λ κ²½μ°κ° λ§€μ° λ§μ κ²λλ€.
// && μ°μ°μλ‘ null & undefined νμμ²΄ν¬νκΈ°
function Narrow(a) {
    // μμ¨λ if/elseμ°λ©΄ λͺνν¨
    if (a && typeof a === "string") {
    }
}
function Narrow2(animal) {
    // inν€μλλ‘ object narrowing κ°λ₯
    if ("swim" in animal) {
        console.log(animal.swim);
    }
    else {
        console.log(animal.fly);
    }
}
function Narrow3(x) {
    // μμ±λͺ in μ€λΈμ νΈμλ£ (λΆκ°λ₯)
    // μ€λΈμ νΈ instanceof λΆλͺ¨class (λΆκ°λ₯)
    if (x.wheel === "4κ°") {
    }
}
//π§‘ --- public, private ---
var μ μ  = /** @class */ (function () {
    function μ μ (name) {
        this.familyName = "shin";
        this.name = name;
        this.name2 = this.familyName;
    }
    μ μ .prototype.changeSecret = function (name) {
        console.log("thisκ°", this);
        this.familyName = name;
    };
    return μ μ ;
}());
var μ μ 1 = new μ μ ("shin");
μ μ 1.changeSecret("son");
console.log("μ μ 1", μ μ 1);
var μ μ 2 = new μ μ ("sun");
μ μ 2.changeSecret("joe");
console.log("μ μ 2", μ μ 2);
// constructor μμμ this.name = name μλ΅κ°λ₯
var μ¬λ3 = /** @class */ (function () {
    function μ¬λ3(name) {
        this.name = name;
    }
    return μ¬λ3;
}());
var person3 = new μ¬λ3("john");
//π§‘ --- protected, static ---
var Userf = /** @class */ (function () {
    function Userf() {
        this.x = 10;
    }
    return Userf;
}());
var NewUserf = /** @class */ (function (_super) {
    __extends(NewUserf, _super);
    function NewUserf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUserf.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUserf;
}(Userf));
//  classμ μ§μ  λ³μλ ν¨μλ₯Ό λΆμ¬νκ³  μΆμΌλ©΄ static ν€μλ
// μ£Όλ‘ class μμ κ°λ¨ν λ©λͺ¨λ₯Ό νκ±°λ, κΈ°λ³Έ μ€μ κ°μ μλ ₯νκ±°λ
// classλ‘ λΆν° μμ±λλ objectκ° μ¬μ©ν  νμκ° μλ λ³μλ€μ λ§λ€μ΄λκ³  μΆμ λ μ¬μ©ν©λλ€
var Userp = /** @class */ (function () {
    function Userp() {
        this.intro = Userp.skill + "μ λ¬Έκ°μλλ€";
    }
    Userp.skill = "js";
    return Userp;
}());
var μ² μ = new Userp();
Userp.skill = "python";
var μν¬ = new Userp();
// private μ°κ³  μμ ν¨μλ₯Ό λ§λ€μ΄μ μ¬μ©νλκ² λ μμ 
// (μμ 1)
var μμ± = /** @class */ (function () {
    function μμ±() {
        this.z = 30;
    }
    μμ±.x = 10;
    μμ±.y = 20;
    return μμ±;
}());
// (μμ 2)
var AddNumber = /** @class */ (function () {
    function AddNumber() {
    }
    AddNumber.addOne = function (x) {
        AddNumber.x = AddNumber.x + x;
    };
    AddNumber.PrintX = function () {
        console.log(AddNumber.x);
    };
    AddNumber.x = 10;
    AddNumber.y = 20;
    return AddNumber;
}());
AddNumber.addOne(3); //μ΄λ κ² νλ©΄ xκ° 3 λν΄μ ΈμΌν¨
// (μμ 3)
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var addBlock = new Square(30, 30, "red");
addBlock.draw();
addBlock.draw();
addBlock.draw();
addBlock.draw();
//π§‘ --- νμμ νλΌλ―Έν°λ‘ μλ ₯νλ Generic
function ν¨μW(x) {
    return x[0];
}
var w = ν¨μW([4, 2]);
// console.log(w + 1) xλ unknown
function Generic(x) {
    return x[0];
}
var l = Generic([4, 2]);
// β Error => extends numberλ‘ νμμ ν
function ν¨μt(x) {
    return x - 1;
}
var g = ν¨μt(100);
// νμνλΌλ―Έν° μ νλκΈ°
// MyTypeμ΄ μ°μΈ‘μμλ μμ±μ κ°μ§κ³  μλμ§
// ifλ¬Έ κ°μκ±°μ
function Generic2(x) {
    return x - 1;
}
var p = Generic2(100);
function Generic3(x) {
    return x.length;
}
Generic3(["a", "b", "c"]);
function Gμμ 1(x) {
    console.log(x.length);
}
Gμμ 1("hello"); // 5
Gμμ 1(["kim", "park"]); // 2
var data = '{"name":"dog","age":1}';
function Gμμ 2(x) {
    return JSON.parse(x);
}
Gμμ 2(data);
// μμ 3
var Gμμ 3 = /** @class */ (function () {
    function Gμμ 3(a) {
        this.name = a;
    }
    return Gμμ 3;
}());
var o = new Gμμ 3("μ΄μ©κ΅¬");
o.name;
//π§‘ --- array μλ£μ λΆμΌ μ μλ tuple type
var λ©λ© = ["dog", true];
// μμΉκΉμ§ κ³ λ €ν νμμ§μ  κ°λ₯ , μ΅μμλ§μ§λ§
var λ©λ©2 = ["dog", true];
// rest parameter νμλ tupleκ°λ₯
function restT() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
// λκ°μ, restλ λ°°μ΄μλ΄κΉ
// function restT(a: number, b: string) {
//   console.log([a, b]);
// }
restT(111, "222");
// spread
var Arr = [1, 2, 3];
var Arr2 = __spreadArray([4, 5], Arr, true);
export {};
