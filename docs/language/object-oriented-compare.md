# 封装、抽象、继承、多态的多语言实现

## 封装（Encapsulation）

### 定义

- 封装也叫信息隐藏或数据访问保护。类通过暴露有限的访问接口，授权外部仅能通过类提供的方式(或叫函数)来访问内部信息或数据

- 封装这个特性，需要编程语言本身支持访问权限控制。如 private、public 等关键字就是 Java 语言中的访问权限控制语法。private 关键字修饰的属性只能类本身访问，可以保护其不被类之外的代码直接访问。否则任意外部代码都可以直接访问、修改属性，也就没办法达到隐藏信息和保护数据的目的了，也就无法支持封装特性了

- 即隐藏部分属性对外不可见

### Python 实现


- ```python
  class MyClass:
      def __init__(self):
          self.__private_data = 42  # 使用双下划线开头定义私有属性
  
      # 公有方法用于访问私有属性
      def get_private_data(self):
          return self.__private_data
  
      def set_private_data(self, value):
          self.__private_data = value
  ```


### C 实现

- 参考
    - https://blog.csdn.net/qq_26768741/article/details/52563090

- 利用头文件，在.h头文件中声明，在 .c 文件中定义，即可隐藏内部信息
    - 头文件 head.h

    - ```c
      #ifndef POINT_H
      #define POINT_H
      
      struct Point;
      typedef struct Point point;
      
      point * new_project();//创建对象
      void free_point(point *point_);//释放空间
      
      #endif
      ```

    - 源文件 

    - ```c
      #include "head.h"
      
      struct Point {  //结构体中存在成员变量
          int x;
          int y;
      };
      
      point *new_point() { //相当于是一个构造函数
          point *new_point_ = (point *)malloc(sizeof(point));
          return new_point_;
      }
      
      void free_point(point *point_){ //相当于是一个析构函数
          if (point_ != NULL) {
              free(point_);
          }
          return;
      }
      ```


- 利用结构体模拟
    - 结合头文件隐藏即可达到封装的效果

    - ```c
      // 定义结构体用于封装数据
      struct MyClass {
          int privateData;
      };
      
      // 封装操作数据的函数
      void setPrivateData(struct MyClass* obj, int value) {
          obj->privateData = value;
      }
      
      int getPrivateData(const struct MyClass* obj) {
          return obj->privateData;
      }
      
      int main() {
          struct MyClass myObject;
          setPrivateData(&myObject, 42);
          printf("Private data: %d\n", getPrivateData(&myObject)); // 输出：Private data: 42
          return 0;
      }
      ```


### C++实现

- 通过关键字public、private和protected来实现


- ```cpp
  class MyClass {
  private:
      int privateData;
  
  public:
      // 公有成员函数，用于访问和修改私有数据
      int getPrivateData() const {
          return privateData;
      }
  
      void setPrivateData(int value) {
          privateData = value;
      }
  };
  ```


### Java实现


- ```java
  public class MyClass {
      private int privateData;
  
      // 公有方法用于访问私有数据
      public int getPrivateData() {
          return privateData;
      }
  
      public void setPrivateData(int value) {
          privateData = value;
      }
  }
  ```


### Go 实现


- ```go
  package main
  
  type MyStruct struct {
      PublicField  int    // 公有字段
      privateField string // 私有字段
  }
  
  // 公有方法，可被外部包访问
  func (m *MyStruct) PublicMethod() {
      // ...
  }
  
  // 私有方法，只能在内部包内访问
  func (m *MyStruct) privateMethod() {
      // ...
  }
  ```


### JavaScript 实现


- ```javascript
  class MyClass {
      constructor() {
          this._privateData = 42; // 使用下划线来表示私有属性
      }
  
      // 公有方法
      doSomething() {
          // ...
      }
  
      // 私有方法
      _privateMethod() {
          // ...
      }
  }
  
  const myObject = new MyClass();
  myObject.doSomething();
  ```


## 抽象（Abstraction）

### 定义

- 主要讲如何隐藏方法的具体实现，让调用者只需要关心方法提供了哪些功能，并不需要知道这些功能是如何实现的

- 可通过编程语言提供的接口类（比如 Java 中的 interface 关键字语法）或者抽象类（比如 Java 中的 abstract 关键字语法）这两种语法机制，来实现抽象这一特性

- 即从更通用的角度设计类，并提供对外服务，使调用方不需了解具体实现

- 抽象类侧重代码复用，接口侧重解耦

### Python 实现


- ```python
  from abc import ABC, abstractmethod
  
  # 抽象类
  class Shape(ABC):
      # 抽象方法
      @abstractmethod
      def draw(self):
          pass
  
      # 普通方法也可以有
      def common_function(self):
          pass
  
  # 实现抽象类的子类
  class Circle(Shape):
      def draw(self):
          # 绘制圆形
          print("Drawing a circle.")
  
  class Square(Shape):
      def draw(self):
          # 绘制正方形
          print("Drawing a square.")
  ```


### C实现


- ```c
  // 抽象示例
  
  // 定义抽象函数类型
  typedef void (*AbstractFunction)(void);
  
  // 实现具体的函数
  void concreteFunctionA(void) {
      printf("This is concrete function A.\n");
  }
  
  void concreteFunctionB(void) {
      printf("This is concrete function B.\n");
  }
  
  // 使用抽象函数指针
  void useAbstractFunction(AbstractFunction function) {
      function();
  }
  
  int main() {
      AbstractFunction funcPtr;
  
      funcPtr = concreteFunctionA;
      useAbstractFunction(funcPtr);
  
      funcPtr = concreteFunctionB;
      useAbstractFunction(funcPtr);
  
      return 0;
  }
  ```


### C++实现

- 抽象类中可以包含纯虚函数，即在类内只声明而不定义虚函数，要求派生类必须实现这些纯虚函数。抽象类不能被实例化，只能作为其他类的基类，通过继承实现具体功能


- ```cpp
  // 抽象类
  class Shape {
  public:
      // 纯虚函数，要求派生类必须实现
      virtual void draw() const = 0;
  
      // 普通函数也可以有
      void commonFunction() const {
          // ...
      }
  };
  
  // 派生类实现抽象类的纯虚函数
  class Circle : public Shape {
  public:
      void draw() const override {
          // 绘制圆形
      }
  };
  
  class Square : public Shape {
  public:
      void draw() const override {
          // 绘制正方形
      }
  };
  ```


### Java实现

- 抽象类


- ```java
  // 抽象类
  abstract class Shape {
      // 抽象方法，要求子类必须实现
      public abstract void draw();
  
      // 普通方法也可以有
      public void commonFunction() {
          // ...
      }
  }
  
  // 实现抽象类的子类
  class Circle extends Shape {
      public void draw() {
          // 绘制圆形
      }
  }
  
  class Square extends Shape {
      public void draw() {
          // 绘制正方形
      }
  }
  ```


- 接口


- ```java
  // 定义一个接口
  interface Shape {
      void draw(); // 抽象方法
  }
  
  // 实现接口
  class Circle implements Shape {
      @Override
      public void draw() {
          // 绘制圆形的具体实现
          System.out.println("Drawing a circle.");
      }
  }
  
  class Square implements Shape {
      @Override
      public void draw() {
          // 绘制正方形的具体实现
          System.out.println("Drawing a square.");
      }
  }
  
  public class Main {
      public static void main(String[] args) {
          Shape circle = new Circle();
          Shape square = new Square();
  
          // 多态调用，根据实际对象的类型来选择正确的方法实现
          circle.draw(); // 输出：Drawing a circle.
          square.draw(); // 输出：Drawing a square.
      }
  }
  ```


### Go 实现


- ```go
  package main
  
  // 定义一个接口
  type Shape interface {
      Draw()
  }
  
  // 实现接口的类型
  type Circle struct{}
  
  func (c Circle) Draw() {
      // 绘制圆形
  }
  
  type Square struct{}
  
  func (s Square) Draw() {
      // 绘制正方形
  }
  
  func main() {
      var shape Shape
  
      shape = Circle{}
      shape.Draw() // 绘制圆形
  
      shape = Square{}
      shape.Draw() // 绘制正方形
  }
  ```


### JavaScript

- 使用类的继承和构造函数可以实现抽象。还可以使用 static 关键字定义静态方法


- ```javascript
  class Shape {
      constructor() {
          // ...
      }
  
      // 抽象方法，需要在子类中实现
      draw() {
          throw new Error("Method not implemented");
      }
  }
  
  class Circle extends Shape {
      constructor(radius) {
          super();
          this.radius = radius;
      }
  
      draw() {
          // 实现绘制圆形
      }
  
      static info() {
          // 静态方法
      }
  }
  ```


## 继承（Inheritance）

### 定义

- 继承用来表示类之间的is-a关系，分单继承和多继承

- 编程语言需要提供特殊的语法机制来支持，比如 Java 使用 extends 关键字来实现继承，C++ 使用冒号（class B : public A），Python 使用 parentheses ()，Ruby 使用 <。不过，有些编程语言只支持单继承，不支持多重继承，比如 Java、PHP、C#、Ruby 等，而有些编程语言既支持单重继承，也支持多重继承，比如 C++、Python、Perl 等

### Python 实现


- ```python
  # 基类
  class Animal:
      def sound(self):
          # ...
          pass
  
  # 派生类继承基类
  class Dog(Animal):
      def bark(self):
          # 狗的特有行为
          pass
  
  class Cat(Animal):
      def meow(self):
          # 猫的特有行为
          pass
  ```


### C 实现

- 在 C 语言中，没有原生的继承机制，但可以通过结构体嵌套和函数指针来模拟实现继承的效果。我们可以在子结构体中嵌套基结构体，并使用函数指针来指向子结构体的特定实现


- ```c
  #include <stdio.h>
  
  // 基类结构体
  struct Animal {
      void (*sound)(void); // 虚函数（函数指针）
  };
  
  // 子类结构体，继承自Animal
  struct Dog {
      struct Animal base; // 嵌套基类结构体
  };
  
  struct Cat {
      struct Animal base; // 嵌套基类结构体
  };
  
  // 基类的虚函数实现
  void animalSound(void) {
      printf("Animal makes a sound.\n");
  }
  
  // 子类的虚函数实现
  void dogSound(void) {
      printf("Dog barks: Woof Woof!\n");
  }
  
  void catSound(void) {
      printf("Cat meows: Meow Meow!\n");
  }
  
  int main() {
      struct Dog myDog;
      struct Cat myCat;
  
      // 设置虚函数指针
      myDog.base.sound = dogSound;
      myCat.base.sound = catSound;
  
      // 调用虚函数，实现多态效果
      myDog.base.sound(); // Dog的声音
      myCat.base.sound(); // Cat的声音
  
      return 0;
  }
  ```


### C++实现


- ```cpp
  // 基类
  class Animal {
  public:
      void sound() const {
          // ...
      }
  };
  
  // 派生类继承基类
  class Dog : public Animal {
  public:
      void bark() const {
          // 狗的特有行为
      }
  };
  
  class Cat : public Animal {
  public:
      void meow() const {
          // 猫的特有行为
      }
  };
  ```


### Java实现


- ```java
  // 基类
  class Animal {
      public void sound() {
          // ...
      }
  }
  
  // 派生类继承基类
  class Dog extends Animal {
      public void bark() {
          // 狗的特有行为
      }
  }
  
  class Cat extends Animal {
      public void meow() {
          // 猫的特有行为
      }
  }
  ```


### Go 实现

- 在 Go 中，没有传统的类继承的概念，但我们可以使用组合来实现类似继承的效果。通过在一个结构体中嵌入另一个结构体，我们可以将嵌入结构体的字段和方法合并到外层结构体中，从而达到复用代码的目的


- ```go
  package main
  
  // 基类
  type Animal struct {
      name string
  }
  
  // 派生类，通过嵌入 Animal 实现类似继承
  type Dog struct {
      Animal
  }
  
  func (d Dog) Bark() {
      // 狗的特有行为
  }
  ```


### JavaScript


- ```javascript
  class Animal {
      constructor(name) {
          this.name = name;
      }
  
      sound() {
          // ...
      }
  }
  
  class Dog extends Animal {
      constructor(name, breed) {
          super(name);
          this.breed = breed;
      }
  
      sound() {
          // 实现狗的声音
      }
  }
  ```


## 多态（Polymorphism）

### 定义

- 多态是指子类可以替换父类，在实际的代码运行过程中，调用子类的方法实现

- 可通过「继承加方法重写」、「接口类语法」、「duck-typing」三种方法实现多态

- duck-typing
    - 只要两个类具有相同的方法，就可以实现多态，并不要求两个类之间有任何关系

### Python 实现

- 由于 Python 是动态类型语言，不需要显式指定类型，所以可以根据实际对象的类型来动态绑定方法


- ```python
  # 基类
  class Shape:
      def draw(self):
          # ...
          pass
  
  # 子类实现方法
  class Circle(Shape):
      def draw(self):
          # 绘制圆形
          print("Drawing a circle.")
  
  class Square(Shape):
      def draw(self):
          # 绘制正方形
          print("Drawing a square.")
  
  # 多态调用，根据引用指向的实际对象类型来选择正确的方法实现
  def draw_shape(shape):
      shape.draw()
  
  if __name__ == "__main__":
      circle = Circle()
      square = Square()
  
      draw_shape(circle)  # 输出：Drawing a circle.
      draw_shape(square)  # 输出：Drawing a square.
  ```


### C实现

- 在 C 语言中，多态通常通过函数指针和函数回调来实现。函数指针允许在运行时动态绑定不同的函数实现，从而实现多态的效果


- ```c
  #include <stdio.h>
  
  // 多态函数接口
  typedef void (*PolymorphismFunction)(void);
  
  // 多态函数
  void dogSound(void) {
      printf("Dog barks: Woof Woof!\n");
  }
  
  void catSound(void) {
      printf("Cat meows: Meow Meow!\n");
  }
  
  int main() {
      PolymorphismFunction animalSounds[] = {dogSound, catSound};
  
      int choice;
      printf("Enter 0 for dog or 1 for cat: ");
      scanf("%d", &choice);
  
      // 多态调用，根据选择调用不同的函数
      if (choice >= 0 && choice < 2) {
          animalSounds[choice]();
      } else {
          printf("Invalid choice.\n");
      }
  
      return 0;
  }
  ```


### C++实现

- C++的多态还支持：
    - C++语言允许函数重载和运算符重载
    - C++语言通过定义虚函数来支持动态联编，动态联编是多态性的一个重要的特征

- 多态特性的工作依赖虚函数的定义，在需要解决多态问题的重载成员函数前，加上virtual关键字，那么该成员函数就变成了虚函数，从上例代码运行的结果看，系统成功的分辨出了对象的真实类型，成功的调用了各自的重载成员函数。如果在基类某些函数前面声明为virtual,则C++编译器会在内存对象模型前面插入一个虚函数指针，该指针指向一个虚函数表，正是因为我们可以改变虚函数指针所指函数表地址，从而实现其多态操作


- ```cpp
  // 基类
  class Shape {
  public:
      // 虚函数
      virtual void draw() const {
          // ...
      }
  };
  
  // 派生类实现虚函数
  class Circle : public Shape {
  public:
      void draw() const override {
          // 绘制圆形
      }
  };
  
  class Square : public Shape {
  public:
      void draw() const override {
          // 绘制正方形
      }
  };
  
  // 多态调用，根据指针所指向的具体对象的类型来选择正确的函数实现
  void drawShape(const Shape* shape) {
      shape->draw();
  }
  
  int main() {
      Circle circle;
      Square square;
  
      drawShape(&circle); // 绘制圆形
      drawShape(&square); // 绘制正方形
  
      return 0;
  }
  ```


### Java实现


- ```java
  // 基类
  class Shape {
      // 方法
      public void draw() {
          // ...
      }
  }
  
  // 子类实现方法
  class Circle extends Shape {
      public void draw() {
          // 绘制圆形
      }
  }
  
  class Square extends Shape {
      public void draw() {
          // 绘制正方形
      }
  }
  
  // 多态调用，根据引用指向的实际对象类型来选择正确的方法实现
  public class Main {
      public static void drawShape(Shape shape) {
          shape.draw();
      }
  
      public static void main(String[] args) {
          Shape circle = new Circle();
          Shape square = new Square();
  
          drawShape(circle); // 绘制圆形
          drawShape(square); // 绘制正方形
      }
  }
  ```


### Go 实现

- 在 Go 中，多态是通过接口（interface）实现的。由于 Go 的接口是隐式实现的，不需要显式声明类型实现了哪个接口，只要一个类型实现了接口所需的方法，它就被视为实现了该接口。这使得在 Go 中实现多态更加简洁和灵活


- ```go
  package main
  
  // 定义一个接口
  type Shape interface {
      Draw()
  }
  
  // 实现接口的类型
  type Circle struct{}
  
  func (c Circle) Draw() {
      // 绘制圆形
  }
  
  type Square struct{}
  
  func (s Square) Draw() {
      // 绘制正方形
  }
  
  func main() {
      shapes := []Shape{Circle{}, Square{}}
  
      for _, shape := range shapes {
          shape.Draw()
      }
  }
  ```


### JavaScript实现


- ```javascript
  class Shape {
      draw() {
          // ...
      }
  }
  
  class Circle extends Shape {
      draw() {
          // 实现绘制圆形
      }
  }
  
  class Square extends Shape {
      draw() {
          // 实现绘制正方形
      }
  }
  
  const shapes = [new Circle(), new Square()];
  shapes.forEach(shape => {
      shape.draw(); // 根据实际类型调用不同的绘制方法
  });
  ```

