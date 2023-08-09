# 刷题多语言特性比较

## 导言
因为博主刷题用 5 种语言（Python、C++、Java、Go、JavaScript）写，在刷题的过程中，对这 5 种语言相同的特性进行汇总比较，也方便记忆

## 基本语法

### 多变量定义

- Python
    - `left, right = 0, len(nums) - 1`

- C++
    - `int left = 0, right = nums.size() - 1;`

- Java
    - `int left = 0, right = nums.length - 1;`

- Golang
    - `left, right := 0, len(nums) - 1`

- JavaScript
    - `let left = 0, right = nums.length - 1;`
    - `const mid = left;`

### 给整型变量+1

- Python
    - x += 1

- C++
    - x += 1;
    - ++x;
    - x++;

- Java
    - x += 1;
    - ++x;
    - x++;

- Golang
    - 注意没有++x
    - x += 1
    - x++

- JavaScript
    - x += 1;
    - ++x;
    - x++;

### 表示空值、空指针

- Python
    - None

- C++
    - nullptr

- Java
    - null

- Golang
    - nil

- JavaScript
    - null

### 两个整数变量做除法并取整

- Python
    - `mid = left + (right - left) // 2`

- C++
    - `int mid = left + (right - left) / 2;`

- Java
    - `int mid = left + (right - left) / 2;`

- Golang
    - `mid := left + (right - left) / 2`

- JavaScript
    - `const mid = left + Math.floor((right - left) / 2);`

### 判断

- Python

    - ```python
      if nums[mid] == target:
          return mid
      elif nums[mid] < target:
          left = mid + 1
      else:
          right = mid - 1
      ```


- C++

    - ```cpp
      if (nums[mid] == target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
      ```


- Java

    - ```java
      if (nums[mid] == target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
      ```


- Golang

    - ```go
      if nums[mid] == target {
          return mid
      } else if nums[mid] < target {
          left = mid + 1
      } else {
          right = mid - 1
      }
      ```


- JavaScript

    - ```javascript
      if (nums[mid] == target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
      ```


### 三元操作符

- Python
    - `res = res2 if len(res) < len(res2) else res`

- C++
    - `res = res.size() < res1.size() ? res1 : res;`

- Java
    - `res = res.length() < res1.length() ? res1 : res;`

- Golang
    - 只能直接写

    - ```go
      if x > y {
          result = x
      } else {
          result = y
      }
      ```


- JavaScript
    - `res = res.length < res1.length ? res1 : res;`

### 循环

- Python
    - while循环的格式

        - ```python
          while 循环判断条件:
              循环体
          ```

    - for循环的格式

        - ```python
          for 变量 in 可迭代对象（序列）:
              循环体
          ```

    - for循环中的range函数怎么使用

        - ```python
          for i in range(start, stop, step):
              循环体
          # satrt ：开始位置
          # stop ：结束位置
          # step ：步长
          # 注意左闭右开
          ```


- C++
    - for循环

        - ```cpp
          for (init; condition; increment) {
             statement(s);
          }
          
          int my_array[5] = {1, 2, 3, 4, 5};
          for (auto &x : my_array) {
              cout << x << endl;  
          }
          ```

    - while 循环

        - ```cpp
          while(condition) {
             statement(s);
          }
          ```


- Java
    - for循环

        - ```java
          for (init; condition; increment) {
             statement(s);
          }
          
          int [] numbers = {10, 20, 30, 40, 50};
          for(int x : numbers) {
             System.out.print( x );
             System.out.print(",");
          }
          ```

    - while 循环

        - ```java
          while(condition) {
             statement(s);
          }
          ```


- Golang

    - ```go
      for init; condition; increment {
      }
      
      for condition { // 相当于 while循环
      }
      
      for { // 相当于一直为true的死循环
      }
      
      // 使用 range 循环访问 map
      for key, value := range oldMap {
          newMap[key] = value
      }
      
      // 使用 range 循环访问 slice
      numbers := [6]int{1, 2, 3, 5}
      for i,x:= range numbers {
        fmt.Printf("第 %d 位 x 的值 = %d\n", i,x)
      }
      ```


- Javascript
    - for 循环

        - ```javascript
          for (init; condition; increment) {
             statement(s);
          }
          
          let person = {fname: "Bill", lname: "Gates", age: 56};
          for (x in person) { // x 为属性名
              console.log(x, person[x]);
          }
          // 输出
          // fname Bill
          // lname Gates
          // age 56
          
          // 注意for..in输出的是属性，for..of是元素的值
          
          let arr = [3, 5, 7];
          arr.foo = "hello";
          for (let i in arr) {
              console.log(i); // 输出 "0", "1", "2", "foo"
          }
          for (let i of arr) {
              console.log(i); // 输出 "3", "5", "7"
          }
          ```

    - while 循环

        - ```javascript
          while(condition) {
             statement(s);
          }
          ```


### 函数的写法

- Python

    - ```python
      def search(nums: List[int], target: int) -> int:
          return 0
      ```


- C++

    - ```cpp
      int search(vector<int>& nums, int target) {
          return -1;
      }
      ```


- Java

    - ```java
      public int search(int[] nums, int target) {
          return -1;
      }
      ```


- Golang

    - ```go
      func search(nums []int, target int) int {
          return -1
      }
      ```


- JavaScript

    - ```javascript
      var search = function(nums, target) {
          return -1;
      };
      ```


### 函数多返回值

- Python

    - ```python
      # 天然支持
      def reverseList(self, head):
          return pre, head
      
      head, tail = reverseList(head)
      ```


- C++
    - 参考：https://www.techiedelight.com/zh/return-multiple-values-functions-cpp/

    - ```cpp
      // 两个
      pair<ListNode*, ListNode*> reverseList(ListNode * head) {
          return {pre, head};
          return make_pair(pre, head);
      }
      tie(head, tail) = reverseList(head);
      //或 （pair在头文件<utility>里）
      pair<ListNode*, ListNode*> result = reverseList(head, tail);
      head = result.first;
      tail = result.second;
      
      // 三个或以上
      #include <tuple>
      std::tuple<int, int, char, double> initialize() {
          return std::make_tuple(10, 20, 'A', 1.2f);
      }
      std::tie(a, b, c, d) = initialize();
      ```


- Java
    - 参考：https://www.techiedelight.com/zh/return-multiple-values-method-java/

    - ```java
      // 多个不同的参数构造一个类
      
      // 相同类型可借助数组
      public static int[] getDetails() {
          int v1 = 30;
          int v2 = 50;
          int v3 = 100;
      
          return new int[] { v1, v2, v3 };
      }
      
      //从Java中的方法返回多个值
      public static void main(String[] args) {
          int[] ints = getDetails();
          System.out.println(Arrays.toString(ints));
      }
      ```


- Golang

    - ```go
      func reverseList(head *ListNode) (*ListNode, *ListNode) {
          return pre, head
      }
      head, tail = reverseList(head)
      ```


- JavaScript

    - ```javascript
      const reverseList = function(head) {
          return [pre, head];
      }
      [head, tail] = reverseList(head);
      ```


### 类定义和初始化

- Python

    - ```python
      class ListNode:
          def __init__(self, val=0, next=None):
              self.val = val
              self.next = next
      
          def search(self, nums: List[int], target: int) -> int:
              return -1 
      
      dummy = ListNode(-1)
      ```


- C++ struct

    - ```cpp
      struct Date {
          int day, month, year;
      };
      Date birthday = {23, 8, 1983};
      
      struct ListNode {
          int val;
          ListNode *next;
          ListNode() : val(0), next(nullptr) {}
          ListNode(int x) : val(x), next(nullptr) {}
          ListNode(int x, ListNode *next) : val(x), next(next) {}
      };
      ListNode* dummy = new ListNode(-1);
      ```


- C++ 类

    - ```cpp
      class Solution {
      public:
          int search(vector<int>& nums, int target) {
              return -1;
          }
      }; // 注意末尾分号
      
      Solution solve;
      ```


- Java

    - ```java
      class Solution {
          public int search(int[] nums, int target) {
              return -1;
          }
      }
      
      public class ListNode {
          int val;
          ListNode next;
          ListNode() {}
          ListNode(int val) { this.val = val; }
          ListNode(int val, ListNode next) { this.val = val; this.next = next; }
      }
      
      ListNode dummy = new ListNode(-1);
      ```


- Golang

    - ```go
      type ListNode struct {
          Val int
          Next *ListNode
      }
      
      dummy := &ListNode{Val: -1}
      ```


- JavaScript

    - ```javascript
      function ListNode(val, next) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
      
      let dummy = new ListNode(-1);
      ```


    - ```javascript
      class UnionFind {
          constructor(grid) {
              let row = grid.length, col = grid[0].length;
              this.parent = new Array(row * col).fill(-1);
          }
      
          find(i) {
              if (this.parent[i] != i) {
                  this.parent[i] = this.find(this.parent[i]);
              }
              return this.parent[i];
          }
      }
      
      const uf = new UnionFind(grid);
      return uf.find(1);
      ```


## 数组

### 数组定义、初始化

- Python

    - ```python
      list1 = ['physics', 'chemistry', 1997, 2000]
      list2 = [1, 2, 3, 4, 5 ]
      
      # 一维数组 n 个，均初始化为 0
       dp = [0] * len(nums)
      
      # 二维数组n行m列，并都初始化为 0
      [[0 for i in range(m)] for j in range(n)]
      
      # 空数组
      []
      ```


- C++ Vector
    - 头文件：vector
    - 一维数组：`vector<int> obj = {1,2,3,4};`
    - 返回一维空数组：`return vector<int>();`
    - 一维数组初始化为 0：`vector<int> dp(n, 0);`
    - 二维数组(值为 0)：`vector<vector<int>> dp(m, vector<int>(n, 0))`

    - ```cpp
      // 把数组转成vector
      int a[] = { 2, 3, 5, 4, 5 };
      vector<int>b(a,a+5);
      ```


- C++数组
    - `double balance[10];`
    - `double balance[] = {1000.0, 2.0, 3.4, 7.0, 50.0};`
    - `int directions[4][2] = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};`

- Java
    - 一维数组：

    - ```java
      int[] a = new int[10]; // 默认填充 0
      // 填充为其他值
      import java.util.Arrays;
      Arrays.fill(a,1);
      ```

    - 二维数组：

    - ```java
      boolean[][] dp = new boolean[len][len];
      
      int[][] map=new int[4][5];
      int[] ten=new int[10];
      Arrays.fill(ten, -1);
      Arrays.fill(map,ten); //成功
      
      for (int i = 0; i <= n; i++) {
          for(int j =0 ;j<=m;j++){
             f[i][j] = Integer.MAX_VALUE;
          }
      }
      
      常量二维数组：
      int[][] directions = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
      ```


- Java ArrayList
    - 一维数组：

    - ```java
      List<Integer> res = new ArrayList<>();
      ```


- Golang
    - `dp := [5]int{1,2,3,4,5}`
    - 初始化为 0：`dp := make([]int, 5)`
    - 二维数组

    - ```go
      // 创建一个有 3 行 4 列的二维数组并统一赋相同的值
      rows := 3
      cols := 4
      initialValue := 0 // 统一赋值为 0
      
      // 使用嵌套循环创建并赋值
      arr := make([][]int, rows)
      for i := 0; i < rows; i++ {
          arr[i] = make([]int, cols)
          for j := 0; j < cols; j++ {
              arr[i][j] = initialValue
          }
      }
      ```


- JavaScript
    - `let arr = [item1, item2, item3];`
    - 初始化为特定值：`let arr = new Array(10).fill(1024);`
    - 新建一个复制：`let arr = Array.from(path)`
    - 二维数组

    - ```javascript
      // 创建一个有 3 行 4 列的二维数组并统一赋相同的值
      const rows = 3;
      const cols = 4;
      const initialValue = 0; // 统一赋值为 0
      
      // 使用循环创建并赋值
      const arr = new Array(rows);
      for (let i = 0; i < rows; i++) {
        arr[i] = new Array(cols).fill(initialValue);
      }
      
      const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
      ```


### 对数组特定位置赋值

- Python
    - `obj[4] = 50.0`

- C++ Vector
    - `obj[4] = 50.0;`

- C++数组
    - `balance[4] = 50.0;`

- Java
    - `obj[4] = 50.0;`

- Java ArrayList
    - `res.set(i, data)`

- Golang
    - `obj[4] = 50.0;`

- JavaScript
    - `obj[4] = 50.0;`

### 访问数组特定位置元素

- Python
    - `list1[2]`
    - 支持负数索引`list[-1]`

- C++ Vector
    - `obj[i]`

- C++数组
    - `double salary = balance[9];`

- Java
    - `a[i]`

- Java ArrayList
    - `res.get(i)`

- Golang
    - `a[i]`

- JavaScript
    - `a[i]`

### 数组的遍历

- Python

    - ```python
      colours = ["red","green","blue"]  
      for colour in colours:  
          print(colour)
      
      for i in range(0, len(colours)):  
          print(i, colour[i])
      
      for i, num in enumerate(nums):
          print(i, num)
      ```


- C++ Vector
    - 一维数组

    - ```cpp
      for(int i=0; i<obj.size(); ++i) {
          cout << obj[i] << " ";
      }
      
      // 待验证
      for (auto &x : my_array) {
          cout << x << endl;  
      }
      
      vector<int>::iterator it;
      for(it=obj.begin(); it!=obj.end(); ++it) {
          cout << *it << " ";
      }
      ```

    - 二维数组

    - ```cpp
      for(int i=0; i < obj.size(); ++i) {
          for(int j=0; j < obj[i].size(); ++j) {
              cout << obj[i][j] << " ";
          }
      }
      ```


- C++数组

    - ```javascript
      // 注意 SIZE 要额外存
      for (int i = 0; i < SIZE; ++i) {
      }
      ```


- Java

    - ```java
      for (int i = 0; i < nums.length; ++i) {
      }
      
      for (int x: nums) {
      }
      ```


- Golang

    - ```go
      for i, num := range nums {
      }
      ```


- JavaScript

    - ```javascript
      for (let i = 0; i < nums.length; ++i) {
      }
      ```


### 数组新增元素(头、中、尾)

- Python
    - 特定位置
        - `list1.insert(索引，元素)`
    - 尾部新增
        - `list1.append('aaa')`

- C++ Vector
    - 新增特定位置元素
        - obj.insert(pos，元素);
        - pos是迭代器，把元素插入到该迭代器位置
    - 新增尾部元素
        - `obj.push_back(data);`

- Java ArrayList
    - 新增特定位置元素
        - `res.add(索引，元素)`
    - 新增尾部元素
        - `res.add(data);`

- Golang
    - 新增头部元素
        - `res = append([]int{data}, res...)`
    - 新增特定位置元素
        - `res = append(res[:索引], append([]int{data}, res[索引:]...)...)`
    - 新增尾部元素
        - `res = append(res, root.Val)`

- JavaScript
    - 新增头部元素
        - `res.unshift(root.val);`
    - 新增特定位置元素
        - 第二个参数 0 表示不删除任何元素
        - `res.splice(索引, 0, root.val)`
    - 新增尾部元素
        - `res.push(root.val);`

### 数组删除元素(头、中、尾)

- Python
    - 删除元素，默认是最后一个
    - `list.pop(index=-1)`
    - `del list[索引]`

- C++ Vector
    - 删除特定位置
        - 传入迭代器，返回删除元素位置的下一个位置的迭代器
        - obj.erase(pos);

        - ```cpp
          c.erase(obj.begin() + n);
          
          // Erase all even numbers
          for (std::vector<int>::iterator it = obj.begin(); it != obj.end();)
          {
              if (*it % 2 == 0)
                  it = obj.erase(it);
              else
                  ++it;
          }
          ```

    - 删除尾部元素
        - `obj.pop_back();`

- Java ArrayList
    - 删除特定位置
        - `arr1.remove(索引)`

- Golang
    - 删除头部
        - `arr1 = arr1[1:]`
    - 删除中间第 2 个
        - `arr2 = append(arr2[:2], arr2[3:]...)`
    - 删除尾部
        - `arr3 = arr3[:len(arr3)-1]`

- JavaScript
    - 删除头部
        - `arr1.shift();`
    - 删除中间第 2 个
        - `arr2.splice(2, 1);`
    - 删除尾部
        - `arr3.pop();`

### 数组长度

- Python
    - `len(list1)`

- C++数组
    - 需自行存储

- C++ Vector
    - `obj.size();`

- Java 数组
    - `obj.length`

- Java ArrayList
    - `obj.size()`

- Golang
    - `len(list1)`

- JavaScript
    - `obj.length`

### 判断数组非空

- Python
    - `if not list1:`

- C++ Vector
    - `!obj.empty();`

- Java
    - `if (obj.length > 0)`

- Golang
    - `if len(obj)> 0`

- JavaScript
    - 非空：`if (obj.length)`

### 清空数组

- Python
    - `list.clear()`

- C++ Vector
    - `obj.clear();`

- Java ArrayList
    - `arr.clear();`

- Golang
    - `arr = arr[:0]`

- JavaScript
    - `arr.length = 0;`

### 对数组进行排序

- Python

    - ```python
      # 自定义排序，降序加上：reverse=True
      # 注意，使用sorted时，要接受返回值，如果直接在原列表排序可用list1.sort()
      student_tuples = [
          ('john', 'A', 15),
          ('jane', 'B', 12),
          ('dave', 'B', 10),
      ]
      sorted(student_tuples, key=lambda student: student[2])   # sort by age
      [('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
      ```


- C++

    - ```cpp
      //从小到大
      sort(obj.begin(),obj.end());
      
      // 自定义排序
      bool compare(int a,int b) {
          return a < b; //升序排列，如果改为return a>b，则为降序 
      }
      sort(obj.begin(), obj.end(), compare);
      
      // 按特定key排序（这里使用lambda表达式作为排序依据）
      vector<pair<string, int>> arr_of_pairs = {{"Alice", 25}, {"Bob", 20}, {"Charlie", 30}};
      sort(arr_of_pairs.begin(), arr_of_pairs.end(), [](const auto& lhs, const auto& rhs) {
          return lhs.second < rhs.second;
      });
      ```


- Java
    - Collection.sort是给List\<T\>进行排序，而Arrays.sort是给数组进行排序

    - ```java
      Integer[] arr = {3, 1, 4, 2, 5};
      
      // 升序
      Arrays.sort(arr);
      
      // 降序
      Arrays.sort(arr, Comparator.reverseOrder());
      ```

    - 按key降序

    - ```java
      import java.util.*;
      import java.util.Collections;
      
      class Person {
          String name;
          int age;
      
          public Person(String name, int age) {
              this.name = name;
              this.age = age;
          }
      }
      
      public class Main {
          public static void main(String[] args) {
              List<Person> people = new ArrayList<>();
              people.add(new Person("Alice", 30));
              people.add(new Person("Bob", 25));
              people.add(new Person("Charlie", 35));
      
              // 使用自定义的 Comparator 进行降序排序
              Collections.sort(people, new Comparator<Person>() {
                  @Override
                  public int compare(Person person1, Person person2) {
                      return Integer.compare(person2.age, person1.age);  // 降序排序
                  }
              });
          }
      }
      
      // 二维数组
      int[][] intervals
      Arrays.sort(intervals, new Comparator<int[]>(){
          public int compare(int[] interval1, int[] interval2) {
              return interval1[0] - interval2[0];
          }
      });
      ```


- Golang

    - ```go
      arr := []int{3, 1, 4, 2, 5}
      
      // 升序
      sort.Ints(nums);
      sort.Float64s(float8List)
      sort.Strings(stringList)
      
      // 降序
      sort.Sort(sort.Reverse(sort.IntSlice(arr)))
      sort.Sort(sort.Reverse(sort.Float64Slice(float8List)))
      sort.Sort(sort.Reverse(sort.StringSlice(stringList)))
      
      // 按特定key排序（这里使用自定义类型排序）
      type Person struct {
          Name string
          Age  int
      }
      
      arrOfPersons := []Person{
          {"Alice", 25},
          {"Bob", 20},
          {"Charlie", 30},
      }
      
      sort.Slice(arrOfPersons, func(i, j int) bool {
          return arrOfPersons[i].Age < arrOfPersons[j].Age
      })
      
      fmt.Println("按年龄升序排序:", arrOfPersons)
      ```


- JavaScript

    - ```javascript
      let arr = [3, 1, 4, 2, 5];
      
      // 升序
      nums1.sort((a,b) => a-b);
      
      // 降序
      arr.sort((a, b) => b - a);
      
      // 按特定key排序
      let arrOfObjects = [
          { name: "Alice", age: 25 },
          { name: "Bob", age: 20 },
          { name: "Charlie", age: 30 }
      ];
      
      arrOfObjects.sort((a, b) => a.age - b.age);
      console.log("按年龄升序排序:", arrOfObjects);
      ```


### 取数组逆序

- Python
    - `res[::-1]`

- C++
    - `reverse(res.begin(), res.end());`

- Java ArrayList
    - `Collections.reverse(res);`

- Golang
    - 手动实现

    - ```go
      func reverse(nums []int) []int {
          for i, j := 0, len(nums)-1; i < j; i, j = i+1, j-1 {
              nums[i], nums[j] = nums[j], nums[i]
          }
          return nums
      }
      ```


- JavaScript
    - `res.reverse()`

### 取数组内的最值

- Python
    - `max(dp)`

- C++ 数组
    - 头文件algorithm

    - ```cpp
      int a[5] = { 2, 3, 5, 4, 5 };
      cout << *max_element(a, a + 5) << endl;
      cout << *min_element(a, a + 5) << endl;
      ```


- C++ vector
    - 头文件algorithm

    - ```cpp
      int a[] = { 2, 3, 5, 4, 5 };
      vector<int>b(a,a+5);
      vector<int>::iterator p = max_element(b.begin(), b.end());
      vector<int>::iterator q = min_element(b.begin(), b.end());
      cout << *p << endl;
      cout << *q << endl;
      ```


- Java
    - 参考：https://blog.csdn.net/robert_chen1988/article/details/78032743

    - ```java
      import java.util.Arrays;
      
      int[] a = {10, 5, 8};
      int min = Arrays.stream(a).min().getAsInt();
      int max = Arrays.stream(a).max().getAsInt();
      ```

    - 手动遍历

    - ```java
      int res = dp[0];
      for (int i = 1; i < len; i++) {
          res = Math.max(res, dp[i]);
      }
      
      int res = Integer.MIN_VALUE;
      for (int x: dp) {
          res = Math.max(res, x);
      }
      ```


- Golang

    - ```go
      func maxSlice(nums []int) int {
          res := nums[0]
          for _, num := range nums {
              if res < num {
                  res = num
              }
          }
          return res
      }
      ```


- JavaScript

    - ```javascript
      const arr = [1, 2, 3];
      const max = Math.max(...arr);
      ```


### 数组merged后拼接nums1[p1:m]的内容

- Python
    - `merged.extend(nums1[p1:m])`

- C++
    - `merged.insert(merged.end(), nums1.begin()+p1, nums1.begin()+m);`

- Java 数组
    - 只能手动赋值

    - ```java
      while (p1 < m) {
          merged[p1+p2] = nums1[p1];
          ++p1;
      }
      ```


- Golang
    - `merged = append(merged, nums1[p1:m]...)`

- JavaScript
    - `merged = merged.concat(nums1.slice(p1, m));`

### 拷贝merged数组到nums1里

- Python
    - `nums1[:] = merged`

- C++
    - `nums1 = merged;`

- Java 数组
    - 只能手动赋值

    - ```java
      for (int i = 0; i < merged.length; ++i) {
          nums1[i] = merged[i];
      }
      ```


- Golang
    - `copy(nums1, merged)`

- JavaScript
    - 手动复制

    - ```javascript
      for (let i = 0; i < m+n; ++i) {
          nums1[i] = merged[i];
      }
      ```


### 把数组nums2替换nums1的m位置后内容

- Python
    - `nums1[m:] = nums2`

- C++

    - ```cpp
      for (int i = 0; i < n; ++i) {
          nums1[m+i] = nums2[i];
      }
      ```


- Java

    - ```java
      for (int i = 0; i < n; ++i) {
          nums1[m+i] = nums2[i];
      }
      ```


- Golang
    - `copy(nums1[m:], nums2)`

- JavaScript
    - m 是插入位置，第二个是删除的长度，第三个是添加的元素
    - `nums1.splice(m, nums1.length - m, ...nums2);`

## 字符串

### 字符串定义、初始化

- Python
    - `res = ""`

- C++
    - `string res = "";`

- Java
    - `String res = "";`

- Golang
    - `res := ""`

- JavaScript
    - `let res = "";`

### 取字符串子串

- Python
    - `s[begin:end]`，注意左闭右开

- C++
    - `s.substr(begin, n)`：截取s中从begin开始（包括0）的n个字符的子串，并返回

- Java
    - `s.substring(begin, end)`，注意左闭右开

- Golang
    - `s[begin:end]`，注意左闭右开

- JavaScript
    - `s.substring(begin, end)`，注意左闭右开

### 字符串遍历+取特定位置字符

- Python

    - ```python
      for i in range(len(s)):
          return s[i]
      ```


- C++

    - ```cpp
      for (int i = 0; i < s.size(); ++i) {
          return s[i];
      }
      
      for (char ch: s) {
      }
      ```


- Java

    - ```java
      for (int i = 0; i < s.length(); ++i) {
          return s.charAt(i);
      }
      ```


- Golang

    - ```go
      // 注意，这里的c类型是rune
      for i, c := range s {
          return c
      }
      
      // 这里的类型是byte
      for i := 0; i < len(s); i++ {
        return s[i]
      }
      ```


- JavaScript

    - ```javascript
      for (int i = 0; i < s.length; ++i) {
          return s.charAt(i);
      }
      
      for (let ch of s) {
      }
      ```


### 字符串长度

- Python
    - `len(s)`

- C++
    - `s.size()`

- Java
    - `s.length()`

- Golang
    - `len(s)`

- JavaScript
    - `s.length`

### 判断字符串非空

- Python
    - `if not s:`

- C++
    - `if (s.size() == 0) {`

- Java
    - `if (s.length() == 0) {`

- Golang
    - `if len(s) == 0 {`

- JavaScript
    - `if (s.length == 0) {`

### 字符串比较

### 字符和数字相互转换

- Python
    - 字符转数字：`int(num1[i1])`
    - 数字转字符串：`str(tmp % 10)`

- C++
    - 字符转数字：`num1[i1]-'0'`，注意此处字符转数字，不能直接int(num1[i1])，否则会得到字符对应的ascii的数字
    - 数字转字符串：`to_string(tmp % 10)`，在头文件string内，可将各种数字转成string

- Java
    - 字符转数字：`num1.charAt(i1) - '0'`
    - 数字转字符串：`String.valueOf(tmp % 10)`

- Golang
    - 字符转数字：`int(num1[i1] - '0')`，注意此处要用int转，否则得到的类型是uint8
    - 字符串转int：`int, err := strconv.Atoi(string)`
    - 数字转字符串：`strconv.Itoa(tmp % 10)`

- JavaScript
    - 字符转数字：`num2.charAt(i2)-'0'`
    - 数字转字符串：`(tmp % 10).toString()`

## 栈

### 栈的定义

- Python
    - 使用列表模拟
    - `s = []`

- C++
    - 头文件：`<stack>`
    - 定义：`stack<typename> name`;
    - 示例：`std::stack<int> st;`

- Java
    - `Deque<Character> stack = new LinkedList<Character>();`
    - `Deque<Character> stack = new ArrayDeque<Character>();`

- Golang
    - 使用slice模拟
    - `var s []int`

- Javascript
    - `const stk = [];`

### 取栈顶元素

- Python
    - `s[-1]`

- C++
    - st.top()
    - 时间复杂度O(1)

- Java
    - `stack.peek()`

- Golang
    - `res := s[len(s)-1]`

- Javascript
    - `stk[stk.length - 1]`

### 栈元素的数量

- Python
    - `len(s)`

- C++
    - st.size()
    - 时间复杂度O(1)

- Java
    - `stack.size()`

- Golang
    - `len(s)`

- Javascript
    - `stack.length`

### 判断栈是否为空

- Python
    - `len(s) == 0`
    - `if not stack:`

- C++
    - st.empty()
    - 返回true为空，false非空
    - 时间复杂度O(1)

- Java
    - `stack.isEmpty()`
    - 非空：`stack.size() > 0`

- Golang
    - `len(s) == 0`

- Javascript
    - 空：`if (!stk.length)`
    - 非空：`if (stk.length)`

### 入栈

- Python
    - `s.append(v)`

- C++
    - st.push(x)
    - 时间复杂度O(1)

- Java
    - `stack.push(ch);`

- Golang
    - `s = append(s, v)`

- Javascript
    - `stk.push(ch);`

### 弹出栈元素

- Python
    - `s.pop()`
    - 注意该函数会弹出并返回栈顶元素

- C++
    - st.pop()
    - 注意该函数无返回值
    - 时间复杂度O(1)

- Java
    - `stack.pop();`

- Golang
    - `s = s[:len(s)-1]`

- Javascript
    - `stk.pop();`
    - 会返回栈顶元素

### 清空栈

- Python
    - s = []

- C++
    - 方法1：遍历并弹出

        - ```cpp
          stack<int> st;
          while(!st.empty()) st.pop();
          ```

    - 方法 2：交换空临时栈(推荐，速度更快)

        - ```cpp
          stack<int> st;
          stack<int>().swap(st);
          ```


- Java
    - `s.clear()`

- Golang
    - `s = s[:0]`

- Javascript
    - s = []

## 队列

### 队列定义、初始化

- Python
    - 在collections里
    - 初始化：`q = deque([root])`

- C++
    - `queue<TreeNode*> q;`

- Java
    - `Queue<TreeNode> q = new LinkedList<>();`

- Golang
    - `q := []*TreeNode{root}`

- JavaScript
    - `const q = [root];`

### 队列遍历

- Python

- C++

- Java

- Golang

- JavaScript

### 获取队头元素

- Python
    - `node = q.front()`

- C++
    - `TreeNode * node = q.front();`

- Java
    - `TreeNode node = q.peek();`

- Golang
    - `node := q[0]`

- JavaScript
    - `node = q[0];`

### 入队

- Python
    - `q.append(data)`

- C++
    - `q.push(root);`

- Java
    - `q.offer(root);`
    - `q.add(root);`

- Golang
    - `q = append(q, node.Left)`

- JavaScript
    - `q.push(node.left);`

### 出队

- Python
    - `q.popleft()`
    - 返回队头元素

- C++
    - `q.pop();`

- Java
    - `q.poll();`
    - 会返回队头元素

- Golang
    - `q = q[1:]`

- JavaScript
    - `const node = q.shift();`
    - 出队并返回队头元素

### 队列是否为空

- Python
    - 非空：`if `

- C++
    - 非空：`if (!q.empty())`

- Java
    - 非空：`while (!q.isEmpty()) {`

- Golang
    - 非空：`for len(q) > 0 {`

- JavaScript
    - 非空：`while (q.length) {`

### 队列数量

- Python
    - `len(q)`

- C++
    - `q.size()`

- Java
    - `q.size()`

- Golang
    - `len(q)`

- JavaScript
    - `q.length`

## 哈希表

### 哈希表定义、初始化

- Python
    - `numDict = {}`
    - `pair = {'(':')', '{':'}', '[':']'}`

- C++

    - ```cpp
      unordered_map<int, int> numDict;
      
      unordered_map<char, char> pair {
          {'(', ')'}, 
          {'[', ']'}, 
          {'{', '}'}
      };
      ```


- Java

    - ```javascript
      Map<Integer, Integer> numDict = new HashMap<>();
      
      Map<Character, Character> pairs = new HashMap<Character, Character>() {{
          put(')', '(');
          put(']', '[');
          put('}', '{');
      }};
      ```


- Golang

    - ```go
      numDict := map[int]int{}
      
      pair := map[byte]byte {
          '(': ')',
          '[': ']',
          '{': '}',
      }
      ```


- JavaScript

    - ```javascript
      const numMap = new Map();
      
      const pairs = new Map([
          [')', '('],
          [']', '['],
          ['}', '{']
      ]);
      ```


### 哈希表判断key是否存在，并获取

- Python

    - ```python
      if target in numDict:
          return numDict[target]
      ```


- C++

    - ```cpp
      auto mit = numDict.find(target);
      if (mit != numDict.end()) {
          return mit->second;
      }
      ```


- Java

    - ```java
      if (numDict.containsKey(target)) {
          return numDict.get(target);
      }
      ```


- Golang

    - ```go
      // 如果键不存在，ok 的值为 false，j 的值为该类型的零值
      if j, ok := numDict[target]; ok {
          return j
      }
      // 如果确认键存在，也可直接
      j := numDict[target]
      ```


- JavaScript

    - ```javascript
      if (numDict.has(target)) {
          return numDict.get(target);
      }
      ```


### 哈希表遍历

- Python

    - ```python
      my_dict = {'a': 1, 'b': 2, 'c': 3}
      for key, value in my_dict.items():
          print(key, value)
      ```


- C++

    - ```cpp
      std::unordered_map<std::string, int> my_map = {{"a", 1}, {"b", 2}, {"c", 3}};
      for (const auto& pair : my_map) {
          std::cout << pair.first << " " << pair.second << std::endl;
      }
      ```


- Java

    - ```java
      Map<String, Integer> myMap = new HashMap<>();
      myMap.put("a", 1);
      myMap.put("b", 2);
      myMap.put("c", 3);
      
      for (Map.Entry<String, Integer> entry : myMap.entrySet()) {
          System.out.println(entry.getKey() + " " + entry.getValue());
      }
      ```


- Golang

    - ```go
      myMap := map[string]int{"a": 1, "b": 2, "c": 3}
      
      for key, value := range myMap {
          fmt.Println(key, value)
      }
      ```


- JavaScript

    - ```javascript
      const myMap = new Map([
          ['a', 1],
          ['b', 2],
          ['c', 3]
      ]);
      
      myMap.forEach((value, key) => {
          console.log(key, value);
      });
      ```


### 哈希表插入

- Python
    - `numDict[num] = i`

- C++
    - `numDict[num] = i`

- Java
    - `numDict.put(num, i);`

- Golang
    - `numDict[num] = i`

- JavaScript
    - `numDict.set(num, i);`

### 哈希表删除

- Python
    - `del my_dict['b']`

- C++
    - `my_map.erase("b");`

- Java
    - `myMap.remove("b");`

- Golang
    - `delete(myMap, "b")`

- JavaScript
    - `myMap.delete('b');`

### 哈希表获取长度

- Python
    - `len(my_dict)`

- C++
    - `my_map.size();`

- Java
    - `myMap.size();`

- Golang
    - `len(myMap)`

- JavaScript
    - `myMap.size`

## 集合

### 集合定义、初始化

- Python
    - `lookup = set()`
    - `nums = {1, 2, 3, 4, 5}`

- C++
    - 头文件set、unordered_set
    - `set<char> lookup;`
    - `unordered_set<char> lookup;`
    - `unordered_set<int> nums = {1, 2, 3, 4, 5};`

- Java

    - ```java
      import java.util.HashSet;
      import java.util.Set;
      
      Set<Character> lookup = new HashSet<>();
      //只能手动加
      lookup.add('a');
      ```


- Golang

    - ```go
      lookup := map[byte]bool{}
      
      nums := map[int]bool{
          1: true,
          2: true,
      }
      ```


- JavaScript

    - ```javascript
      const lookup = new Set();
      
      const nums = new Set([1, 2, 3, 4, 5]);
      ```


### 集合判断元素是否存在

- Python
    - `if s in lookup:`

- C++
    - `if (lookup.find(s) != lookup.end()) {`

- Java
    - `if (lookup.contains(s) {`

- Golang
    - `if _, ok := lookup[s]; ok {`

- JavaScript
    - `if (lookup.has(s)) {`

### 集合遍历

- Python

    - ```python
      for num in nums:
          print(num, end=" ")
      ```


- C++

    - ```cpp
      for (int num : nums) {
          cout << num << " ";
      }
      ```


- Java

    - ```java
      for (int num : nums) {
          System.out.print(num + " ");
      }
      ```


- Golang

    - ```go
      nums := map[int]bool{
          1: true,
          2: true,
      }
      
      // range 遍历 map 只有一个值时，遍历key
      for num := range nums {
          fmt.Print(num, " ")
      }
      ```


- JavaScript

    - ```javascript
      for (const num of nums) {
          console.log(num);
      }
      ```


### 集合插入

- Python
    - `lookup.add(s)`

- C++
    - `lookup.insert(s);`

- Java
    - `lookup.add(s);`

- Golang
    - `lookup[s] = true`

- JavaScript
    - `lookup.add(s);`

### 集合删除

- Python
    - `lookup.remove(s)`

- C++
    - `lookup.erase(s);`

- Java
    - `lookup.remove(s);`

- Golang
    - `delete(lookup, s)`

- JavaScript
    - `lookup.delete(s);`

### 集合获取长度

- Python
    - `len(lookup)`

- C++
    - `lookup.size()`

- Java
    - `lookup.size()`

- Golang
    - `len(lookup)`

- JavaScript
    - `lookup.size`

## 算法

### 取系统最值

- Python
    - 最大值：`max_value = float('inf')`
    - 最小值：`min_value = float('-inf')`

- C++
    - 使用limits头文件的numeric_limits
    - 类型有int、double等
    - 最大值：`std::numeric_limits<int>::max()`
    - 最小值：`std::numeric_limits<int>::lowest()`
    - 注意要用lowest而不是min，在double中会表示最小的正数而不是最小数 

- Java

    - ```java
      1、
      基本类型：int 二进制位数：32
      包装类：java.lang.Integer
      最小值：Integer.MIN_VALUE= -2147483648 （-2的31次方）
      最大值：Integer.MAX_VALUE= 2147483647  （2的31次方-1）
      2、
      基本类型：short 二进制位数：16
      包装类：java.lang.Short
      最小值：Short.MIN_VALUE=-32768 （-2的15此方）
      最大值：Short.MAX_VALUE=32767 （2的15次方-1）
      3、
      基本类型：long 二进制位数：64
      包装类：java.lang.Long
      最小值：Long.MIN_VALUE=-9223372036854775808 （-2的63次方）
      最大值：Long.MAX_VALUE=9223372036854775807 （2的63次方-1）
      4、
      基本类型：float 二进制位数：32
      包装类：java.lang.Float
      最小值：Float.MIN_VALUE=1.4E-45 （2的-149次方）
      最大值：Float.MAX_VALUE=3.4028235E38  （2的128次方-1）
      5、
      基本类型：double 二进制位数：64
      包装类：java.lang.Double
      最小值：Double.MIN_VALUE=4.9E-324 （2的-1074次方）
      最大值：Double.MAX_VALUE=1.7976931348623157E308  （2的1024次方-1）
      ```


- Golang
    - 使用math包中的函数
    - Int类型
        - 最大值：MaxInt
        - 最小值：MinInt
    - Float类型
        - 最大值：MaxFloat64
        - 最小值：-MaxFloat64

- Javascript

    - ```javascript
      最大值：Number.MAX_VALUE
      最小值：Number.MIN_VALUE
      最小安全整数：Number.MIN_SAFE_INTEGER
      最大安全整数：Number.MAX_SAFE_INTEGER
      ```


### 取两个值的较大值、较小值

- Python
    - 内置的max和min函数即可判断
    - 可传入多个参数，返回其中最大/最小值
    - 可传入一个数组，返回其中最大/最小值

- C++
    - 导入头文件：algorithm
    - max(x, y)
    - min(x, y)

- Java
    - Math.max和min方法

    - ```java
      double max(double arg1, double arg2)
      float max(float arg1, float arg2)
      int max(int arg1, int arg2)
      long max(long arg1, long arg2)
      ```


- Golang
    - math包里提供的max/min方法，仅能对比float64类型
    - 取较小值：math.Min(float64, float64) float64
    - 取较大值：math.Max(float64, float64) float64
    - Int 类只能手写比较函数

    - ```go
      func Min(x, y int64) int64 {
          if x < y {
              return x
          }
          return y
      }
      
      func Max(x, y int64) int64 {
          if x > y {
              return x
          }
          return y
      }
      ```


- JavaScript
    - Math.max和min方法
    - 原型

    - ```javascript
      Math.max()
      Math.max(value0)
      Math.max(value0, value1)
      Math.max(value0, value1, /* … ,*/ valueN)
      ```

    - 示例

    - ```javascript
      Math.max(10, 20); //  20
      
      const arr = [1, 2, 3];
      const max = Math.max(...arr);
      ```


### 如何取多个数的最大值、最小值

- Python
    - `max(a, b, c)`

- C++
    - `max(max(a,b), c)`

- Java
    - `Math.max(Math.max(a, b), c)`

- Golang
    - `maxInt(maxInt(a, b), c)`
    - maxInt 需自己写

- JavaScript
    - `Math.max(a, b, c)`

### 如何交换x和y的值

- Python
    - `a, b = b, a`

- C++
    - 导入头文件：algorithm
    - swap(x, y)

- Java

    - ```java
      int tmp = x;
      x = y;
      y = tmp;
      ```

    - 若是数组

    - ```java
      // 交换元素
      private static void swap(int[] arr, int i, int j) {
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
      ```


- Golang
    - `a, b = b, a`

- JavaScript
    - `[a, b] = [b, a];`
