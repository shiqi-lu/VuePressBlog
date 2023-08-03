# 二叉树的 4 种遍历(前中后序和层次遍历)整理


## 引言

- 二叉树遍历主要包括，前中后序遍历和层次遍历，在此对各方法进行汇总，方便比较相同方法间的不同点

- 来源于leetcode的如下问题：
    - [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
    - [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
    - [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
    - [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

## 问题示例

- 以如下二叉树为例：


- ```plain text
      3
     / \
    9  20
      /  \
     15   7
  ```


- 前序遍历返回：`[3,9,20,15,7]`

- 中序遍历返回：`[9,3,15,20,7]`

- 后序遍历返回：`[9,15,7,20,3]`

- 层次遍历返回：

    - ```plain text
      [
        [3],
        [9,20],
        [15,7]
      ]
      ```


## 前中后序的递归遍历

### 前序遍历

- 按照访问根节点-左子树-右子树的顺序遍历

- 时间复杂度O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次

- 空间复杂度O(n)，为递归过程中栈的开销，平均情况下为 O(log⁡ n)，最坏情况下树呈现链状，为 O(n)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 40 ms, 击败 66.00%; 内存 15.64 MB, 击败 43.47%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          self.res = []
          self.dfs(root)
          return self.res
      
      def dfs(self, root: Optional[TreeNode]) -> None:
          if not root:
              return
          self.res.append(root.val)
          self.dfs(root.left)
          self.dfs(root.right)
          
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 4 ms, 击败 41.96%; 内存 8.2 MB, 击败 33.54%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> preorderTraversal(TreeNode* root) {
          vector<int> res;
          dfs(res, root);
          return res;
      }
  
      void dfs(vector<int> &res, TreeNode* root) {
          if (root == nullptr) {
              return;
          }
          res.push_back(root->val);
          dfs(res, root->left);
          dfs(res, root->right);
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 4 ms, 击败 41.96%; 内存 8.2 MB, 击败 33.54%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> preorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          dfs(res, root);
          return res;
      }
  
      public void dfs(List<Integer> res, TreeNode root) {
          if (root == null) {
              return;
          }
          res.add(root.val);
          dfs(res, root.left);
          dfs(res, root.right);
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 1.83 MB, 击败 99.95%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func preorderTraversal(root *TreeNode) []int {
      res := []int{}
      dfs(&res, root)
      return res
  }
  
  // 特别注意结果数组需要传递引用
  func dfs(res *[]int, root *TreeNode) {
      if root == nil {
          return
      }
      *res = append(*res, root.Val)
      dfs(res, root.Left)
      dfs(res, root.Right)
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 68 ms, 击败 24.6%; 内存 41.1 MB, 击败 59.97%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var preorderTraversal = function(root) {
      let res = [];
      dfs(res, root);
      return res;
  };
  
  const dfs = function(res, root) {
      if (root == null) {
          return;
      }
      res.push(root.val);
      dfs(res, root.left);
      dfs(res, root.right);
  };
  ```

  </CodeGroupItem></CodeGroup>


### 中序遍历

- 按照访问左子树-根节点-右子树的顺序遍历

- 时间复杂度O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次

- 空间复杂度O(n)，为递归过程中栈的开销，平均情况下为 O(log⁡ n)，最坏情况下树呈现链状，为 O(n)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 40 ms, 击败 65.64%; 内存 16.1 MB, 击败 23.75%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          self.res = []
          self.dfs(root)
          return self.res
      
      def dfs(self, root: Optional[TreeNode]) -> None:
          if not root:
              return
          self.dfs(root.left)
          self.res.append(root.val)
          self.dfs(root.right)
          
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 80.99%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> inorderTraversal(TreeNode* root) {
          vector<int> res;
          dfs(res, root);
          return res;
      }
  
      void dfs(vector<int> &res, TreeNode* root) {
          if (root == nullptr) {
              return;
          }
          dfs(res, root->left);
          res.push_back(root->val);
          dfs(res, root->right);
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 0 ms, 击败 100%; 内存 39.7 MB, 击败 51.87%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> inorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          dfs(res, root);
          return res;
      }
  
      public void dfs(List<Integer> res, TreeNode root) {
          if (root == null) {
              return;
          }
          dfs(res, root.left);
          res.add(root.val);
          dfs(res, root.right);
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 100%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func inorderTraversal(root *TreeNode) []int {
      res := []int{}
      dfs(&res, root)
      return res
  }
  
  func dfs(res *[]int, root *TreeNode) {
      if root == nil {
          return
      }
      dfs(res, root.Left)
      *res = append(*res, root.Val)
      dfs(res, root.Right)
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 68 ms, 击败 24.96%; 内存 41 MB, 击败 87.36%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var inorderTraversal = function(root) {
      let res = [];
      dfs(res, root);
      return res;
  };
  
  const dfs = function(res, root) {
      if (root == null) {
          return;
      }
      dfs(res, root.left);
      res.push(root.val);
      dfs(res, root.right);
  };
  ```

  </CodeGroupItem></CodeGroup>


### 后序遍历

- 按照访问左子树-右子树-根节点的顺序遍历

- 时间复杂度O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次

- 空间复杂度O(n)，为递归过程中栈的开销，平均情况下为 O(log⁡ n)，最坏情况下树呈现链状，为 O(n)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 40 ms, 击败 66.43%; 内存 16.2 MB, 击败 6.3%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          self.res = []
          self.dfs(root)
          return self.res
      
      def dfs(self, root: Optional[TreeNode]) -> None:
          if not root:
              return
          self.dfs(root.left)
          self.dfs(root.right)
          self.res.append(root.val)
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 0 ms, 击败 100%; 内存 8.2 MB, 击败 37.6%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> postorderTraversal(TreeNode* root) {
          vector<int> res;
          dfs(res, root);
          return res;
      }
  
      void dfs(vector<int> &res, TreeNode* root) {
          if (root == nullptr) {
              return;
          }
          dfs(res, root->left);
          dfs(res, root->right);
          res.push_back(root->val);
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 0 ms, 击败 100%; 内存 39.8 MB, 击败 35.36%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> postorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          dfs(res, root);
          return res;
      }
  
      public void dfs(List<Integer> res, TreeNode root) {
          if (root == null) {
              return;
          }
          dfs(res, root.left);
          dfs(res, root.right);
          res.add(root.val);
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 80.68%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func postorderTraversal(root *TreeNode) []int {
      res := []int{}
      dfs(&res, root)
      return res
  }
  
  // 特别注意结果数组需要传递引用
  func dfs(res *[]int, root *TreeNode) {
      if root == nil {
          return
      }
      dfs(res, root.Left)
      dfs(res, root.Right)
      *res = append(*res, root.Val)
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 60 ms, 击败 69.29%; 内存 41.1 MB, 击败 46.99%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var postorderTraversal = function(root) {
      let res = [];
      dfs(res, root);
      return res;
  };
  
  const dfs = function(res, root) {
      if (root == null) {
          return;
      }
      dfs(res, root.left);
      dfs(res, root.right);
      res.push(root.val);
  };
  ```

  </CodeGroupItem></CodeGroup>


## 前中后序的迭代遍历(使用栈)

### 前序遍历

- 使用栈，初始把根节点入栈

- 当栈不为空时，把栈顶元素，即根节点值加入到结果中，然后先入栈右子树，再入栈左子树

- 时间复杂度O(n)，空间复杂度O(n)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 40 ms, 击败 66%; 内存 16.1 MB, 击败 21.79%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          res = []
          if not root:
              return res
          # 初始化栈，并将根节点入栈
          stack = [root]
          while stack:
              node = stack.pop()
              # 当栈不为空时，把栈顶元素，即根节点值加入到结果中
              res.append(node.val)
              # 如果 node 的右子树非空，将右子树入栈
              if node.right:
                  stack.append(node.right)
              # 如果 node 的左子树非空，将左子树入栈
              if node.left:
                  stack.append(node.left)
          return res
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 84.85%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> preorderTraversal(TreeNode* root) {
          vector<int> res;
          if (root == nullptr) {
              return res;
          }
          stack<TreeNode*> st;
          st.push(root);
          while (!st.empty()) {
              TreeNode* node = st.top();
              st.pop();
              res.push_back(node->val);
              if (node->right != nullptr) {
                  st.push(node->right);
              }
              if (node->left != nullptr) {
                  st.push(node->left);
              }
          }
          return res;
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 75.75%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> preorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          if (root == null) {
              return res;
          }
          Deque<TreeNode> stack = new LinkedList<>();
          stack.push(root);
          while (!stack.isEmpty()) {
              TreeNode node = stack.peek();
              stack.pop();
              res.add(node.val);
              if (node.right != null) {
                  stack.push(node.right);
              }
              if (node.left != null) {
                  stack.push(node.left);
              }
          }
          return res;
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 75.75%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func preorderTraversal(root *TreeNode) []int {
      res := []int{}
      if root == nil {
          return res
      }
      stack := []*TreeNode{root}
      for len(stack) > 0 {
          node := stack[len(stack)-1]
          stack = stack[:len(stack)-1]
          res = append(res, node.Val)
          if node.Right != nil {
              stack = append(stack, node.Right)
          }
          if node.Left != nil {
              stack = append(stack, node.Left)
          }
      }
      return res
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var preorderTraversal = function(root) {
      let res = [];
      if (root == null) {
          return res;
      }
      const stack = [root];
      while (stack.length) {
          node = stack.pop();
          res.push(node.val);
          if (node.right != null) {
              stack.push(node.right);
          }
          if (node.left != null) {
              stack.push(node.left);
          }
      }
      return res;
  };
  ```

  </CodeGroupItem></CodeGroup>


### 中序遍历

- 不断把根节点入栈，并向左子树前进

- 出栈一个元素，输出，并向右子树前进，再执行上一步

- 时间复杂度O(n)，空间复杂度O(n)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 56 ms, 击败 9.29%; 内存 16.1 MB, 击败 12.93%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          if not root:
              return []
          res, cur, stack = [], root, []
          while cur or stack:
              while cur:
                  stack.append(cur)
                  cur = cur.left
              node = stack.pop()
              res.append(node.val)
              cur = node.right
          return res
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 8 ms, 击败 3.61%; 内存 8.2 MB, 击败 51.66%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> inorderTraversal(TreeNode* root) {
          vector<int> res;
          if (root == nullptr) {
              return res;
          }
          TreeNode* cur = root;
          stack<TreeNode*> st;
          while (cur != nullptr || !st.empty()) {
              while (cur != nullptr) {
                  st.push(cur);
                  cur = cur->left;
              }
              TreeNode* node = st.top();
              st.pop();
              res.push_back(node->val);
              cur = node->right;
          }
          return res;
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 0 ms, 击败 100%; 内存 39.8 MB, 击败 35.27%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> inorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          if (root == null) {
              return res;
          }
          TreeNode cur = root;
          Deque<TreeNode> stack = new LinkedList<>();
          while (cur != null || !stack.isEmpty()) {
              while (cur != null) {
                  stack.push(cur);
                  cur = cur.left;
              }
              TreeNode node = stack.peek();
              stack.pop();
              res.add(node.val);
              cur = node.right;
          }
          return res;
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func inorderTraversal(root *TreeNode) []int {
      res := []int{}
      if root == nil {
          return res
      }
      cur := root
      stack := []*TreeNode{}
      for cur != nil || len(stack) > 0 {
          for cur != nil {
              stack = append(stack, cur)
              cur = cur.Left
          }
          node := stack[len(stack)-1]
          stack = stack[:len(stack)-1]
          res = append(res, node.Val)
          cur = node.Right
      }
      return res
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func inorderTraversal(root *TreeNode) []int {
      res := []int{}
      if root == nil {
          return res
      }
      cur := root
      stack := []*TreeNode{}
      for cur != nil || len(stack) > 0 {
          for cur != nil {
              stack = append(stack, cur)
              cur = cur.Left
          }
          node := stack[len(stack)-1]
          stack = stack[:len(stack)-1]
          res = append(res, node.Val)
          cur = node.Right
      }
      return res
  }
  ```

  </CodeGroupItem></CodeGroup>


### 后序遍历

- 和前序遍历类似，但不同的地方是，这里遍历是先根-右-左的顺序，然后最后逆序

- 时间复杂度O(n)，空间复杂度O(n)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 40 ms, 击败 66.43%; 内存 16.1 MB, 击败 23.49%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          res = []
          if not root:
              return res
          stack = [root]
          while stack:
              node = stack.pop()
              res.append(node.val)
              if node.left:
                  stack.append(node.left)
              if node.right:
                  stack.append(node.right)
          return res[::-1]
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 4 ms, 击败 41.62%; 内存 8 MB, 击败 98.90%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> postorderTraversal(TreeNode* root) {
          vector<int> res;
          if (root == nullptr) {
              return res;
          }
          stack<TreeNode *> st;
          st.push(root);
          while (!st.empty()) {
              TreeNode * node = st.top();
              res.push_back(node->val);
              st.pop();
              if (node->left != nullptr) {
                  st.push(node->left);
              }
              if (node->right != nullptr) {
                  st.push(node->right);
              }
          }
          reverse(res.begin(), res.end());
          return res;
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 73.40%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> postorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          if (root == null) {
              return res;
          }
          Deque<TreeNode> stack = new LinkedList<>();
          stack.push(root);
          while (!stack.isEmpty()) {
              TreeNode node = stack.peek();
              stack.pop();
              res.add(node.val);
              if (node.left != null) {
                  stack.push(node.left);
              }
              if (node.right != null) {
                  stack.push(node.right);
              }
          }
          Collections.reverse(res);
          return res;
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 100%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func postorderTraversal(root *TreeNode) []int {
      res := []int{}
      if root == nil {
          return res
      }
      stack := []*TreeNode{root}
      for len(stack) > 0 {
          node := stack[len(stack)-1]
          stack = stack[:len(stack)-1]
          res = append(res, node.Val)
          if node.Left != nil {
              stack = append(stack, node.Left)
          }
          if node.Right != nil {
              stack = append(stack, node.Right)
          }
      }
      return reverse(res)
  }
  
  func reverse(nums []int) []int {
      for i, j := 0, len(nums)-1; i < j; i, j = i+1, j-1 {
          nums[i], nums[j] = nums[j], nums[i]
      }
      return nums
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 60 ms, 击败 69.29%; 内存 41.1 MB, 击败 61.79%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var postorderTraversal = function(root) {
      let res = [];
      if (root == null) {
          return res;
      }
      const stack = [root];
      while (stack.length) {
          node = stack.pop();
          res.push(node.val);
          if (node.left != null) {
              stack.push(node.left);
          }
          if (node.right != null) {
              stack.push(node.right);
          }
      }
      return res.reverse();
  };
  ```

  </CodeGroupItem></CodeGroup>


## 前中后序的Morris遍历

### 前序遍历

- 参考：https://leetcode.cn/problems/binary-tree-preorder-traversal/solutions/656142/cer-cha-shu-san-chong-bian-li-qian-zhong-erk2/

- ![](https://img.shiqi-lu.tech/202307220954762.png)

- 整体思路是，先建立根节点在中序遍历下的前驱节点和自身的连接，即上图 1 到 图 2，然后即可顺着上述连接遍历，返回根节点时，再断开连接

- 分为4 步：
    - 1.从根节点开始，找到根节点在中序遍历下的前驱节点，建立连接(由上至下)，向左子树前进
    - 2.左侧到头时，向右子树前进(由下至上)，因此时右子树指向的是根节点，则回到了根节点
    - 3.由根节点再找一遍该根节点在中序遍历下的前驱节点，断开连接
    - 4.向右子树前进

- 时间复杂度O(n)，空间复杂度O(1)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python: 时间 44 ms, 击败 41.96%; 内存 15.9 MB, 击败 62.46%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          res = []
          if not root:
              return res
          cur = root
          while cur:
              curLeft = cur.left
              
              # 当左子树存在，即可建立前驱节点的连接
              if curLeft:
                  while curLeft.right and curLeft.right != cur:
                      # 此时curLeft是cur节点中序遍历的前驱节点
                      curLeft = curLeft.right
  
                  if not curLeft.right:
                      # 1.第一次是找前驱节点，并建立连接
                      curLeft.right = cur
                      # 这里输出的是有左子树的根节点
                      res.append(cur.val)
                      cur = cur.left # 2.不断向左子树前进
                      continue # 注意，先建立完所有左子树的连接
                  else:
                      # 3.此时是已返回了上层节点，再次找到前驱节点
                      # 断开连接
                      curLeft.right = None
              else:
                  # 当前节点无左子树，则可直接输出当前节点
                  res.append(cur.val)
              
              # 2、4.左子树到头了，向右子树前进，有两种可能：
              # 可能是树本身的右子树，也可能是在上面建立起来的到根节点连接
              cur = cur.right
          return res
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 0 ms, 击败 100%; 内存 8.1 MB, 击败 78.71%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> preorderTraversal(TreeNode* root) {
          vector<int> res;
          if (root == nullptr) {
              return res;
          }
          TreeNode * cur = root;
          while (cur != nullptr) {
              TreeNode * curLeft = cur->left;
              if (curLeft != nullptr) {
                  while (curLeft->right != nullptr && curLeft->right != cur) {
                      curLeft = curLeft->right;
                  }
                  if (curLeft->right == nullptr) {
                      curLeft->right = cur;
                      res.push_back(cur->val);
                      cur = cur->left;
                      continue;
                  } else {
                      curLeft->right = nullptr;
                  }
              } else {
                  res.push_back(cur->val);
              }
              cur = cur->right;
          }
          return res;
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 85.13%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> preorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          if (root == null) {
              return res;
          }
          TreeNode cur = root;
          while (cur != null) {
              TreeNode curLeft = cur.left;
              if (curLeft != null) {
                  while (curLeft.right != null && curLeft.right != cur) {
                      curLeft = curLeft.right;
                  }
                  if (curLeft.right == null) {
                      curLeft.right = cur;
                      res.add(cur.val);
                      cur = cur.left;
                      continue;
                  } else {
                      curLeft.right = null;
                  }
              } else {
                  res.add(cur.val);
              }
              cur = cur.right;
          }
          return res;
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 80.46%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func preorderTraversal(root *TreeNode) []int {
      res := []int{}
      if root == nil {
          return res
      }
      cur := root
      for cur != nil {
          curLeft := cur.Left
          if curLeft != nil {
              for curLeft.Right != nil && curLeft.Right != cur {
                  curLeft = curLeft.Right
              }
              if curLeft.Right == nil {
                  curLeft.Right = cur
                  res = append(res, cur.Val)
                  cur = cur.Left
                  continue
              } else {
                  curLeft.Right = nil
              }
          } else {
              res = append(res, cur.Val)
          }
          cur = cur.Right
      }
      return res
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 60 ms, 击败 69.63%; 内存 41 MB, 击败 78.55%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var preorderTraversal = function(root) {
      let res = [];
      if (root == null) {
          return res;
      }
      let cur = root;
      while (cur != null) {
          let curLeft = cur.left;
          if (curLeft != null) {
              while (curLeft.right != null && curLeft.right != cur) {
                  curLeft = curLeft.right;
              }
              if (curLeft.right == null) {
                  curLeft.right = cur;
                  res.push(cur.val);
                  cur = cur.left;
                  continue;
              } else {
                  curLeft.right = null;
              }
          } else {
              res.push(cur.val);
          }
          cur = cur.right;
      }
      return res;
  };
  ```

  </CodeGroupItem></CodeGroup>


### 中序遍历

- 同前序遍历，但只在到达左侧节点返回上层时，输出当前节点

- 时间复杂度O(n)，空间复杂度O(1)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 40 ms, 击败 65.64%; 内存 15.9 MB, 击败 60.44%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          res = []
          if not root:
              return res
          cur = root
          while cur:
              curLeft = cur.left
              
              # 当左子树存在，即可建立前驱节点的连接
              if curLeft:
                  while curLeft.right and curLeft.right != cur:
                      # 此时curLeft是cur节点中序遍历的前驱节点
                      curLeft = curLeft.right
  
                  if not curLeft.right:
                      # 1.第一次是找前驱节点，并建立连接
                      curLeft.right = cur
                      cur = cur.left # 2.不断向左子树前进
                      continue # 注意，先建立完所有左子树的连接
                  else:
                      # 3.此时是已返回了上层节点，再次找到前驱节点
                      # 断开连接
                      curLeft.right = None
              # 到达左侧节点返回上层时，输出当前节点
              res.append(cur.val)
              
              # 2、4.左子树到头了，向右子树前进，有两种可能：
              # 可能是树本身的右子树，也可能是在上面建立起来的到根节点连接
              cur = cur.right
          return res
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 0 ms, 击败 100%; 内存 8 MB, 击败 92.63%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> inorderTraversal(TreeNode* root) {
          vector<int> res;
          if (root == nullptr) {
              return res;
          }
          TreeNode * cur = root;
          while (cur != nullptr) {
              TreeNode * curLeft = cur->left;
              if (curLeft != nullptr) {
                  while (curLeft->right != nullptr && curLeft->right != cur) {
                      curLeft = curLeft->right;
                  }
                  if (curLeft->right == nullptr) {
                      curLeft->right = cur;
                      cur = cur->left;
                      continue;
                  } else {
                      curLeft->right = nullptr;
                  }
              }
              res.push_back(cur->val);
              cur = cur->right;
          }
          return res;
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 0 ms, 击败 100%; 内存 39.7 MB, 击败 51.87%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> inorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          if (root == null) {
              return res;
          }
          TreeNode cur = root;
          while (cur != null) {
              TreeNode curLeft = cur.left;
              if (curLeft != null) {
                  while (curLeft.right != null && curLeft.right != cur) {
                      curLeft = curLeft.right;
                  }
                  if (curLeft.right == null) {
                      curLeft.right = cur;
                      cur = cur.left;
                      continue;
                  } else {
                      curLeft.right = null;
                  }
              }
              res.add(cur.val);
              cur = cur.right;
          }
          return res;
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 77.88%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func inorderTraversal(root *TreeNode) []int {
      res := []int{}
      if root == nil {
          return res
      }
      cur := root
      for cur != nil {
          curLeft := cur.Left
          if curLeft != nil {
              for curLeft.Right != nil && curLeft.Right != cur {
                  curLeft = curLeft.Right
              }
              if curLeft.Right == nil {
                  curLeft.Right = cur
                  cur = cur.Left
                  continue
              } else {
                  curLeft.Right = nil
              }
          }
          res = append(res, cur.Val)
          cur = cur.Right
      }
      return res
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 64 ms, 击败 48.12%; 内存 41 MB, 击败 85.20%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var inorderTraversal = function(root) {
      let res = [];
      if (root == null) {
          return res;
      }
      let cur = root;
      while (cur != null) {
          let curLeft = cur.left;
          if (curLeft != null) {
              while (curLeft.right != null && curLeft.right != cur) {
                  curLeft = curLeft.right;
              }
              if (curLeft.right == null) {
                  curLeft.right = cur;
                  cur = cur.left;
                  continue;
              } else {
                  curLeft.right = null;
              }
          }
          res.push(cur.val);
          cur = cur.right;
      }
      return res;
  };
  ```

  </CodeGroupItem></CodeGroup>


### 后序遍历

- 参考：
    - https://leetcode.cn/problems/binary-tree-postorder-traversal/solutions/431066/er-cha-shu-de-hou-xu-bian-li-by-leetcode-solution/
    - https://leetcode.cn/problems/binary-tree-preorder-traversal/solutions/656142/cer-cha-shu-san-chong-bian-li-qian-zhong-erk2/

- ![](https://img.shiqi-lu.tech/202307222135431.png)

- 在使用morris遍历的过程中，到达返回根节点，断开子节点到根节点的连接后，对其左子树进行输出，然后将其逆序

- 时间复杂度O(n)，空间复杂度O(1)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 44 ms, 击败 43.37%; 内存 16.2 MB, 击败 6.3%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
          res = []
          if not root:
              return res
          cur = root
          while cur:
              curLeft = cur.left
              if curLeft:
                  while curLeft.right and curLeft.right != cur:
                      curLeft = curLeft.right
                  if not curLeft.right:
                      curLeft.right = cur
                      cur = cur.left
                      continue
                  else:
                      curLeft.right = None
                      self.addPath(res, cur.left)
              cur = cur.right
          # 最后一轮循环结束时，从root结点引申的右结点单链表并没有输出，这里补上
          self.addPath(res, root)
          return res
      
      def addPath(self, res: List[int], root: Optional[TreeNode]) -> None:
          count = 0
          while root:
              count += 1
              res.append(root.val)
              root = root.right
          # 翻转
          left, right = len(res) - count, len(res) - 1
          while left < right:
              res[left], res[right] = res[right], res[left]
              left += 1
              right -= 1
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 0 ms, 击败 100%; 内存 8 MB, 击败 92.68%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<int> postorderTraversal(TreeNode* root) {
          vector<int> res;
          if (root == nullptr) {
              return res;
          }
          TreeNode * cur = root;
          while (cur != nullptr) {
              TreeNode * curLeft = cur->left;
              if (curLeft != nullptr) {
                  while (curLeft->right != nullptr && curLeft->right != cur) {
                      curLeft = curLeft->right;
                  }
                  if (curLeft->right == nullptr) {
                      curLeft->right = cur;
                      cur = cur->left;
                      continue;
                  } else {
                      curLeft->right = nullptr;
                      addPath(res, cur->left);
                  }
              } 
              cur = cur->right;
          }
          addPath(res, root);
          return res;
      }
  
      void addPath(vector<int> &res, TreeNode* root) {
          int count = 0;
          while (root != nullptr) {
              ++count;
              res.push_back(root->val);
              root = root->right;
          }
          reverse(res.end()-count, res.end());
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 0 ms, 击败 100%; 内存 39.6 MB, 击败 83.69%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<Integer> postorderTraversal(TreeNode root) {
          List<Integer> res = new ArrayList<>();
          if (root == null) {
              return res;
          }
          TreeNode cur = root;
          while (cur != null) {
              TreeNode curLeft = cur.left;
              if (curLeft != null) {
                  while (curLeft.right != null && curLeft.right != cur) {
                      curLeft = curLeft.right;
                  }
                  if (curLeft.right == null) {
                      curLeft.right = cur;
                      cur = cur.left;
                      continue;
                  } else {
                      curLeft.right = null;
                      addPath(res, cur.left);
                  }
              }
              cur = cur.right;
          }
          addPath(res, root);
          return res;
      }
  
      private void addPath(List<Integer> res, TreeNode root) {
          int count = 0;
          while (root != null) {
              ++count;
              res.add(root.val);
              root = root.right;
          }
          int left = res.size() - count, right = res.size() - 1;
          while (left < right) {
              int tmp = res.get(left);
              res.set(left, res.get(right));
              res.set(right, tmp);
              ++left;
              --right;
          }
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 1.9 MB, 击败 100%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func postorderTraversal(root *TreeNode) []int {
      res := []int{}
      if root == nil {
          return res
      }
      cur := root
      for cur != nil {
          curLeft := cur.Left
          if curLeft != nil {
              for curLeft.Right != nil && curLeft.Right != cur {
                  curLeft = curLeft.Right
              }
              if curLeft.Right == nil {
                  curLeft.Right = cur
                  cur = cur.Left
                  continue
              } else {
                  curLeft.Right = nil
                  addPath(&res, cur.Left)
              }
          }
          cur = cur.Right
      }
      addPath(&res, root)
      return res
  }
  
  func addPath(res *[]int, root *TreeNode) {
      resSize := len(*res)
      for root != nil {
          *res = append(*res, root.Val)
          root = root.Right
      }
      // 此处用了切片的特性，对切片数据更改是共享的
      reverse((*res)[resSize:])
  }
  
  func reverse(nums []int) []int {
      for i, j := 0, len(nums)-1; i < j; i, j = i+1, j-1 {
          nums[i], nums[j] = nums[j], nums[i]
      }
      return nums
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 60 ms, 击败 69.29%; 内存 41.2 MB, 击败 30.44%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var postorderTraversal = function(root) {
      let res = [];
      if (root == null) {
          return res;
      }
      let cur = root;
      while (cur != null) {
          let curLeft = cur.left;
          if (curLeft != null) {
              while (curLeft.right != null && curLeft.right != cur) {
                  curLeft = curLeft.right;
              }
              if (curLeft.right == null) {
                  curLeft.right = cur;
                  cur = cur.left;
                  continue;
              } else {
                  curLeft.right = null;
                  addPath(res, cur.left);
              }
          }
          cur = cur.right;
      }
      addPath(res, root);
      return res;
  };
  
  const addPath = function(res, root) {
      let count = 0;
      while (root != null) {
          ++count;
          res.push(root.val);
          root = root.right;
      }
      let left = res.length - count, right = res.length - 1;
      while (left < right) {
          [res[left], res[right]] = [res[right], res[left]];
          ++left;
          --right;
      }
  }
  ```

  </CodeGroupItem></CodeGroup>




## 层次遍历的迭代法

- 使用队列，存储每一层的左右子节点，然后逐个出队遍历即可

- 时间复杂度O(n)，空间复杂度O(n)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 44 ms, 击败 61.1%; 内存 16.7 MB, 击败 48.60%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
          res = []
          if not root:
              return res
          q = deque([root])
          while q:
              size = len(q)
              levelList = []
              for _ in range(size):
                  node = q.popleft()
                  levelList.append(node.val)
                  if node.left:
                      q.append(node.left)
                  if node.right:
                      q.append(node.right)
              res.append(levelList)
          return res
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 4 ms, 击败 78.72%; 内存 13.1 MB, 击败 46%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<vector<int>> levelOrder(TreeNode* root) {
          vector<vector<int>> res;
          if (root == nullptr) {
              return res;
          }
          queue<TreeNode*> q;
          q.push(root);
          while (!q.empty()) {
              int size = q.size();
              vector<int> levelList;
              for (int i = 0; i < size; ++i) {
                  TreeNode * node = q.front();
                  q.pop();
                  levelList.push_back(node->val);
                  if (node->left != nullptr) {
                      q.push(node->left);
                  }
                  if (node->right != nullptr) {
                      q.push(node->right);
                  }
              }
              res.push_back(levelList);
          }
          return res;
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 1 ms, 击败 84.23%; 内存 43 MB, 击败 14.6%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<List<Integer>> levelOrder(TreeNode root) {
          List<List<Integer>> res = new ArrayList<>();
          if (root == null) {
              return res;
          }
          Queue<TreeNode> q = new LinkedList<>();
          q.offer(root);
          while (!q.isEmpty()) {
              int size = q.size();
              List<Integer> levelList = new ArrayList<>();
              for (int i = 0; i < size; ++i) {
                  TreeNode node = q.peek();
                  q.poll();
                  levelList.add(node.val);
                  if (node.left != null) {
                      q.offer(node.left);
                  }
                  if (node.right != null) {
                      q.offer(node.right);
                  }
              }
              res.add(levelList);
          }
          return res;
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 3.4 MB, 击败 54.37%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func levelOrder(root *TreeNode) [][]int {
      res := [][]int{}
      if root == nil {
          return res
      }
      q := []*TreeNode{root}
      for len(q) > 0 {
          size := len(q)
          levelList := []int{}
          for i := 0; i < size; i++ {
              node := q[0]
              q = q[1:]
              levelList = append(levelList, node.Val)
              if node.Left != nil {
                  q = append(q, node.Left)
              }
              if node.Right != nil {
                  q = append(q, node.Right)
              }
          }
          res = append(res, levelList)
      }
      return res
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 64 ms, 击败 86.27%; 内存 44.5 MB, 击败 15.69%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  var levelOrder = function(root) {
      const res = [];
      if (!root) {
          return res;
      }
      const q = [root];
      while (q.length) {
          const size = q.length;
          const levelList = [];
          for (let i = 0; i < size; ++i) {
              const node = q.shift();
              levelList.push(node.val);
              if (node.left) {
                  q.push(node.left);
              }
              if (node.right) {
                  q.push(node.right);
              }
          }
          res.push(levelList);
      }
      return res;
  };
  ```

  </CodeGroupItem></CodeGroup>


## 层次遍历的递归法

- 相当于前序遍历，在参数上维护一个level，标识当前是在哪一层

- 时间复杂度O(n)，空间复杂度O(n)


  <CodeGroup>
  <CodeGroupItem title="python" active>

  ```python
  # python3: 时间 44 ms, 击败 61.1%; 内存 18.7 MB, 击败 5.4%
  # Definition for a binary tree node.
  # class TreeNode:
  #     def __init__(self, val=0, left=None, right=None):
  #         self.val = val
  #         self.left = left
  #         self.right = right
  class Solution:
      def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
          self.res = []
          self.dfs(root, 0)
          return self.res
      
      def dfs(self, root: Optional[TreeNode], level: int) -> None:
          if not root:
              return
          if len(self.res) <= level:
              self.res.append([])
          self.res[level].append(root.val)
          self.dfs(root.left, level+1)
          self.dfs(root.right, level+1)
  ```

  </CodeGroupItem>
  <CodeGroupItem title="cpp">

  ```cpp
  // c++: 时间 4 ms, 击败 78.72%; 内存 14.2 MB, 击败 5%
  /**
   * Definition for a binary tree node.
   * struct TreeNode {
   *     int val;
   *     TreeNode *left;
   *     TreeNode *right;
   *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
   *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
   *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
   * };
   */
  class Solution {
  public:
      vector<vector<int>> levelOrder(TreeNode* root) {
          vector<vector<int>> res;
          dfs(res, root, 0);
          return res;
      }
  
      void dfs(vector<vector<int>>& res, TreeNode* root, int level) {
          if (root == nullptr) {
              return;
          }
          if (res.size() <= level) {
              res.push_back(vector<int>());
          }
          res[level].push_back(root->val);
          dfs(res, root->left, level+1);
          dfs(res, root->right, level+1);
      }
  };
  ```

  </CodeGroupItem>
  <CodeGroupItem title="java">

  ```java
  // java: 时间 1 ms, 击败 84.23%; 内存 43 MB, 击败 10.30%
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<List<Integer>> levelOrder(TreeNode root) {
          List<List<Integer>> res = new ArrayList<>();
          dfs(res, root, 0);
          return res;
      }
  
      private void dfs(List<List<Integer>> res, TreeNode root, int level) {
          if (root == null) {
              return;
          }
          if (res.size() <= level) {
              res.add(new ArrayList<>());
          }
          res.get(level).add(root.val);
          dfs(res, root.left, level+1);
          dfs(res, root.right, level+1);
      }
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="go">

  ```go
  // go: 时间 0 ms, 击败 100%; 内存 3.8 MB, 击败 7.31%
  /**
   * Definition for a binary tree node.
   * type TreeNode struct {
   *     Val int
   *     Left *TreeNode
   *     Right *TreeNode
   * }
   */
  func levelOrder(root *TreeNode) [][]int {
      res := [][]int{}
      dfs(&res, root, 0)
      return res
  }
  
  func dfs(res *[][]int, root *TreeNode, level int) {
      if root == nil {
          return
      }
      if len(*res) <= level {
          *res = append(*res, []int{})
      }
      (*res)[level] = append((*res)[level], root.Val)
      dfs(res, root.Left, level+1)
      dfs(res, root.Right, level+1)
  }
  ```

  </CodeGroupItem>
  <CodeGroupItem title="javascript">

  ```javascript
  // javascript: 时间 80 ms, 击败 26.37%; 内存 44.4 MB, 击败 27.49%
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  var levelOrder = function(root) {
      const res = [];
      dfs(res, root, 0);
      return res;
  };
  
  const dfs = function(res, root, level) {
      if (root == null) {
          return;
      }
      if (res.length <= level) {
          res.push([]);
      }
      res[level].push(root.val);
      dfs(res, root.left, level+1);
      dfs(res, root.right, level+1);
  }
  ```

  </CodeGroupItem></CodeGroup>

