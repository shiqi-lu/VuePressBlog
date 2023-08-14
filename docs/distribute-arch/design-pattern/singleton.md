# 单例模式 (Singleton)


## 定义

- 确保一个类只有一个实例，并提供一个全局访问点来访问这个唯一实例

- Ensure a class has only one instance, and provide a global point of access to it

## 设计时需考虑的点

- 1.考虑对象创建时的线程安全问题

- 2.考虑是否支持延迟加载

- 3.考虑 getInstance() 性能是否高(是否加锁)

- 4.构造函数必须具有private访问权限，才能避免通过关键字new创建实例

## 实现的3点注意

- 1.单例类构造函数的可见性为private，这样才能避免外部通过 new 创建实例

- 2.提供一个类型为自身的静态私有成员变量

- 3.提供一个公有的静态工厂方法

## 优点

- 1.提供了对唯一实例的受控访问。因为单例类封装了它的唯一实例，所以它可以严格控制客户怎样以及何时访问它，并为设计及开发团队提供了共享的概念

- 2.由于在内存中只存在一个对象，因此可以节约系统资源，对于一些需要频繁创建和销毁的对象，可提高系统性能

- 3.允许可变数目的实例。基于单例模式可以进行扩展，使用与控制单例对象相似的方法来获得指定个数的实例对象

## 缺点

- 1.由于单例模式中没有抽象层，因此单例类的扩展有很大的困难

- 2.单例类的职责过重，在一定程度上违背了单一职责原则，因为单例类既提供了业务方法，又提供了创建对象的方法（工厂方法），将对象的创建和对象本身的功能耦合在一起

- 3.现在很多面向对象语言(如Java、C# )的运行环境都提供了自动垃圾回收技术，因此如果实例化的共享对象长时间不被利用，系统会认为它是垃圾,会自动销毁并回收资源，下次利用时又将重新实例化，这将导致共享的单例对象状态的丢失

- 4.该模式在多线程环境下需要进行特殊处理， 避免多个线程多次创建单例对象

- 5.单例的客户端代码单元测试可能会比较困难， 因为许多测试框架以基于继承的方式创建模拟对象。 由于单例类的构造函数是私有的， 而且绝大部分语言无法重写静态方法， 所以你需要想出仔细考虑模拟单例的方法。 要么干脆不编写测试代码， 或者不使用单例模式

## 适用环境

- 1.系统只需要一个实例对象，例如系统要求提供一个唯一的序列号生成器或资源管理器，或者因为资源消耗太大而只允许创建一个对象

- 2.客户调用类的单个实例只允许使用一个公共访问点，除了该公共访问点，不能通过其他途径访问该实例

- 3.需要更加严格控制全局变量

## 参考

- https://www.digitalocean.com/community/tutorials/java-singleton-design-pattern-best-practices-examples

- https://zhuanlan.zhihu.com/p/37534850

- https://refactoringguru.cn/design-patterns/singleton


## 懒汉式单例类

### 介绍

- 在调用静态工厂方法时实例化单例类，在类加载的时候没有创建单例对象，同时要注意，要处理多线程的环境

- ![](https://img.shiqi-lu.tech/20200905182333.png)

### 代码

- python
    - 使用函数装饰器实现单例
        - 使用不可变的类地址作为键，实例作为值，每次创建实例时，首先查看该类是否存在实例，存在的话直接返回该实例即可，否则新建一个实例并存放在字典中

        - ```python
          def singleton(cls):
              _instance = {}
          
              def inner():
                  if cls not in _instance:
                      _instance[cls] = cls()
                  return _instance[cls]
          
              return inner
          
          @singleton
          class Cls(object):
              def __init__(self):
                  pass
          
          cls1 = Cls()
          cls2 = Cls()
          print(id(cls1) == id(cls2))
          ```

        - 输出：`True`
    - 使用类装饰器实现单例

        - ```python
          class Singleton(object):
              def __init__(self, cls):
                  self._cls = cls
                  self._instance = {}
              def __call__(self):
                  if self._cls not in self._instance:
                      self._instance[self._cls] = self._cls()
                  return self._instance[self._cls]
          
          @Singleton
          class Cls2(object):
              def __init__(self):
                  pass
          
          cls1 = Cls2()
          cls2 = Cls2()
          print(id(cls1) == id(cls2))
          
          # 也可以这么使用：
          class Cls3():
              pass
          
          Cls3 = Singleton(Cls3)
          cls3 = Cls3()
          cls4 = Cls3()
          print(id(cls3) == id(cls4))
          ```

    - 使用 `*new*` 关键字实现单例
        - 使用`*new*`方法在创造实例时进行干预

        - ```python
          class Singleton(object):
              __instance = None
              def __new__(cls,*args,**kwargs):
                  if not cls. __instance:
                      cls.__instance = super().__new__(cls,*args,**kwargs)
                  return cls.__instance
          
          a = Singleton()
          b = Singleton()
          print(a == b)
          print(id(a) == id(b))
          ```

    - 使用 metaclass 实现单例(线程安全)

        - ```python
          from threading import Lock, Thread
          
          class SingletonMeta(type):
              _instances = {}
              _lock: Lock = Lock()
              def __call__(cls, *args, **kwargs):
                  with cls._lock:
                      if cls not in cls._instances:
                          instance = super().__call__(*args, **kwargs)
                          cls._instances[cls] = instance
                  return cls._instances[cls]
          
          
          class Singleton(metaclass=SingletonMeta):
              value: str = None
          
              def __init__(self, value: str) -> None:
                  self.value = value
          
              def some_business_logic(self):
                  pass
          
          
          def test_singleton(value: str) -> None:
              singleton = Singleton(value)
              print(singleton.value)
          
          
          if __name__ == "__main__":
              process1 = Thread(target=test_singleton, args=("FOO",))
              process2 = Thread(target=test_singleton, args=("BAR",))
              process1.start()
              process2.start()
          
              s1 = Singleton()
              s2 = Singleton()
              print(id(s1) == id(s2))
          ```

        - 输出：

        - ```plain text
          FOO
          FOO
          True
          ```


- c++

    - ```cpp
      #include <string>
      #include <thread>
      #include <iostream>
      
      class Singleton {
      private:
          // 注意构造函数必须用private,防止被初始化
          Singleton(const std::string value) : value_(value) {
          }
          ~Singleton() {}
      
          static Singleton *singleton_;
          static std::mutex mutex_;
      
          std::string value_;
      
      public:
          // 禁止复制构造函数和赋值构造函数
          Singleton(Singleton &other) = delete;
          void operator=(const Singleton &) = delete;
      
          // 注意使用静态方法控制对单例的访问，会在第一次执行时创建在静态区，
          // 后续访问会直接返回该实例
          static Singleton *GetInstance(const std::string &value);
      
          std::string value() const {
              return value_;
          }
      };
      
      Singleton *Singleton::singleton_ = nullptr;
      std::mutex Singleton::mutex_;
      
      Singleton *Singleton::GetInstance(const std::string &value) {
          // 使用锁保证线程安全
          std::lock_guard<std::mutex> lock(mutex_);
          if (singleton_ == nullptr) {
              singleton_ = new Singleton(value);
          }
          return singleton_;
      }
      
      void ThreadFoo() {
          // 模拟延迟初始化
          std::this_thread::sleep_for(std::chrono::milliseconds(1000));
          Singleton *singleton = Singleton::GetInstance("FOO");
          std::cout << singleton->value() << "\n";
      }
      
      void ThreadBar() {
          std::this_thread::sleep_for(std::chrono::milliseconds(1000));
          Singleton *singleton = Singleton::GetInstance("BAR");
          std::cout << singleton->value() << "\n";
      }
      
      
      int main() {
          std::thread t1(ThreadFoo);
          std::thread t2(ThreadBar);
          t1.join();
          t2.join();
      
          return 0;
      }
      ```


    - ```plain text
      FOO
      FOO
      ```

    - 输出表明，这里只创建了一个实例

- java
    - 缺点
        - 这里给 getInstance() 这个方法加了一把锁 (synchronized)，导致这个函数的并发度只有1，即串行操作，而这个函数在单例使用期间会一直被调用。若频繁使用时，频繁加锁、释放锁和并发度低等问题，会导致性能瓶颈

    - ```java
      public class Singleton {
          // 静态私有成员变量
          private static Singleton instance = null;
      
          // 私有构造函数
          private Singleton() {}
          
          // 静态公有工厂方法，返回唯一实例
          public static synchronized Singleton getInstance() {
              if (instance == null)
                  instance = new Singleton();
              return instance;
          }
      }
      
      public class Client {
          public static void main(String args[]) {
              Singleton s1 = Singleton.getInstance();
              // ...
          }
      }
      ```


- go

    - ```go
      package main
      
      import (
      	"fmt"
      	"sync"
      )
      
      var once sync.Once
      
      type single struct {
      }
      
      var singleInstance *single
      
      func getInstance() *single {
      	if singleInstance == nil {
      		once.Do(
      			func() {
      				fmt.Println("Creating single instance now.")
      				singleInstance = &single{}
      			})
      	} else {
      		fmt.Println("Single instance already created.")
      	}
      
      	return singleInstance
      }
      
      func main() {
      
      	for i := 0; i < 30; i++ {
      		go getInstance()
      	}
      
      	// Scanln is similar to Scan, but stops scanning at a newline and
      	// after the final item there must be a newline or EOF.
      	fmt.Scanln()
      }
      ```


    - ```plain text
      // go 输出
      Creating single instance now.
      Single instance already created.
      Single instance already created.
      ...
      ```


## 饿汉式单例类

### 介绍

- 当类被加载时，静态变量instance会被初始化，此时类的私有构造函数会被调用，单例类的唯一实例将被创建

- instance的创建过程是线程安全的。不过这样的实现方式不支持延迟加载

- ![](https://img.shiqi-lu.tech/20200905182009.png)

### 讨论

- 饿汉式的实现方式，将耗时的初始化操作，提前到程序启动的时候完成，这样能避免在程序运行的时候，再去初始化导致的性能问题

- 如果实例占用资源多，按照 fail-fast 的设计原则，就希望在程序启动时就将这个实例初始化好。如果资源不够，就会在程序启动的时候触发报错，此时可立即去修复。能避免在程序运行一段时间后，突然因为初始化这个实例占用资源过多，导致系统崩溃，影响系统的可用性

### 代码

- java

    - ```java
      public class EagerSingleton {
          private static final EagerSingleton instance = new EagerSingleton();
          private EagerSingleton() {}
          
          public static EagerSingleton getInstance() {
              return instance;
          }
      }
      ```


- go

    - ```go
      package main
      
      import "fmt"
      
      // Singleton 饿汉式单例
      type Singleton struct{}
      
      var singleton *Singleton
      
      func init() {
      	singleton = &Singleton{}
      }
      
      func getInstance() *Singleton {
      	return singleton
      }
      
      func main() {
      
      	for i := 0; i < 30; i++ {
      		go getInstance()
      	}
      
      	// Scanln is similar to Scan, but stops scanning at a newline and
      	// after the final item there must be a newline or EOF.
      	fmt.Scanln()
      }
      ```


## 双重检测

### 介绍

- 这种单例实现方式既支持延迟加载、又支持高并发

- 只要 instance 被创建之后，即使再调用 getInstance() 函数也不会再进入到加锁逻辑中。这种方式解决了懒汉式并发度低的问题

### 代码

- java

    - ```java
      public class Singleton {
          private static Singleton instance = null;
      
          private Singleton() {}
          
          public static Singleton getInstance() {
              if (instance == null) {
                  // 此处为类级别的锁
                  synchronized(Singleton.class) {
                      if (instance == null) {
                          instance = new Singleton();
                      }
                  }
              }
              return instance;
          }
      }
      ```


- go

    - ```go
      package main
      
      import (
      	"fmt"
      	"sync"
      )
      
      var lock = &sync.Mutex{}
      
      type single struct {
      }
      
      var singleInstance *single
      
      func getInstance() *single {
      	if singleInstance == nil {
      		lock.Lock()
      		defer lock.Unlock()
      		if singleInstance == nil {
      			fmt.Println("Creating single instance now.")
      			singleInstance = &single{}
      		} else {
      			fmt.Println("Single instance already created.")
      		}
      	} else {
      		fmt.Println("Single instance already created.")
      	}
      
      	return singleInstance
      }
      
      func main() {
      
      	for i := 0; i < 30; i++ {
      		go getInstance()
      	}
      
      	// Scanln is similar to Scan, but stops scanning at a newline and
      	// after the final item there must be a newline or EOF.
      	fmt.Scanln()
      }
      ```


    - ```plain text
      // 输出
      Creating single instance now.
      Single instance already created.
      Single instance already created.
      ...
      ```


## 静态内部类

### 介绍

- SingletonHolder 是一个静态内部类，当外部类 Singleton 被加载的时候， 并不会创建 SingletonHolder 实例对象。只有当调用 getInstance() 方法时，SingletonHolder 才会被加载，这个时候才会创建 instance。由 JVM 来保证 instance 的唯一性、创建过程的线程安全性

### 代码

- java

    - ```java
      public class Singleton {
          private Singleton() {}
          private static class SingletonHolder {
              private static final Singleton instance = new Singleton();
          }
          private static Singleton getInstance() {
              return SingletonHolder.instance;
          }
      }
      ```


## 枚举

### 介绍

- 基于枚举类型的单例实现。这种实现方式通过java枚举类型本身的特性，保证了实例创建的线程安全性和实例的唯一性

### 代码

- java

    - ```java
      public enum IdGenerator {
          INSTANCE;
          private AtomicLong id = new AtomicLong(0);
        
          public long getId() {
              return id.incermentAndGet();
          }
      }
      ```

