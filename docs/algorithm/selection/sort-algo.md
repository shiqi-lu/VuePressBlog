---
title: 排序算法全整理
date: 2021-04-22 23:46:15
tags:
- 数据结构
- 算法
- 排序
categories:
- 数据结构与算法
description: 冒泡、选择、插入、希尔、堆排、快排、归并
---

## 冒泡排序(基础写法)
- 核心思想：每一趟都通过按顺序两两比较的方法，把当前剩余元素的最大值移动到一端
    ```python
    # 超时
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            length = len(nums)
            # 外层循环：从第0到n-2共n-1趟，比较是以当前元素和后一个元素比较
            for i in range(length-1):
                # 内层循环：从0到n-i-1，减i是因为每一趟结束均有一个已排好序的值
                # 如进行第i=1趟时，意味着有1个数字已排好
                # 如进行第i=n-2趟时(最后一趟)，此时i为n-2个数字已排好，
                # 最后2个数字再比较一次即可
                for j in range(length - i - 1):
                    # 交换当前元素和后一个元素
                    if nums[j] > nums[j+1]:
                        nums[j], nums[j+1] = nums[j+1], nums[j]
            return nums
    ```
- 最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，空间复杂度：O(1)
## 冒泡排序(基础改进写法)
- 思想是如果一次排序中没有经过交换，则停止排序
    ```python
    # 超时
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            length = len(nums)
            swapped = True
            for i in range(length-1):
                if not swapped:
                    break
                swapped = False
                for j in range(length - i - 1):
                    if nums[j] > nums[j+1]:
                        swapped = True
                        nums[j], nums[j+1] = nums[j+1], nums[j]
            return nums
    ```
- 最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，空间复杂度：O(1)
## 冒泡排序(第三种写法)
- 在第二种写法的基础上继续优化，下一轮比较时，只需比较到上一轮中，最后一次发生交换的位置即可。因为后面的所有元素都没有发生过交换，必然已经有序了
    ```python
    # 超时
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            swapped = True
            # 最后一个没有经过排序的元素的下标
            last_unsorted = len(nums) - 1
            # 上次交换的位置
            swapped_index = -1
            while swapped:
                swapped = False
                for i in range(last_unsorted):
                    if nums[i] > nums[i+1]:
                        nums[i], nums[i+1] = nums[i+1], nums[i]
                        swapped = True
                        swapped_index = i
                # 最后一个没有经过排序的元素的下标就是
                # 最后一次发生交换的位置
                last_unsorted = swapped_index
            return nums
    ```
- 最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，空间复杂度：O(1)
## 选择排序(基本写法)
- 对一个序列A中的元素A[0]~A[n-1]，令i从0到n-1枚举，进行第n趟操作，每趟从待排序部分[i,n-1]中选择最小的元素，令其与待排序部分的第一个元素A[i]进行交换，这样元素A[i]就会与当前有序区间[1,i-1]形成新的有序区间[1,i]。于是在n趟操作之后，所有的元素都是有序的，时间复杂度O(n^2)
    ```python
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            length = len(nums)
            for i in range(length - 1):
                min_index = i
                for j in range(i + 1, length):
                    if nums[min_index] > nums[j]:
                        min_index = j
                nums[min_index], nums[i] = nums[i], nums[min_index]
            return nums
    ```
- 空间复杂度O(1)，时间复杂度O(n^2)
# 选择排序(改进写法)
- 每次选择是记录最小值和最大值
    ```python
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            length = len(nums)
            for i in range(length // 2):
                min_index, max_index = i, i
                for j in range(i + 1, length - i):
                    if nums[min_index] > nums[j]:
                        min_index = j
                    if nums[max_index] < nums[j]:
                        max_index = j
                # 若min_index和max_index相等，那么必定都等于i，
                # 且后面的所有数字都与 nums[i] 相等，此时排序完成
                if min_index == max_index:
                    break
                nums[min_index], nums[i] = nums[i], nums[min_index]
                # 若最大值的下标刚好是i，由于nums[i]和nums[min_index]已
                # 交换，所以这里要更新 max_index 的值
                if max_index == i:
                    max_index = min_index
                last_index = length - i - 1
                nums[max_index], nums[last_index] = nums[last_index], nums[max_index]
            return nums
    ```
- 空间复杂度O(1)，时间复杂度O(n^2)
## 插入排序
- 对序列A的前n个元素A[0]到A[n-1]，令i从1到n-1枚举，进行n-1趟操作。假设某一趟时，序列A的前i-1个元素A[i]到A[i-1]已经有序，而范围[i,n-1]还未有序，那么从范围[1,i-1]中寻找某个位置j，是的将a[i]插入位置j后（此时A[j]到A[i-1]会后移一位至A[j+1]到A[i]），范围[1,i]有序
    ```python
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            length = len(nums)
            for i in range(1, length):
                cur_num = nums[i]
                j = i - 1
                # 寻找插入位置的过程中，不断地将比cur_num大的数字向后挪
                while j >= 0 and cur_num < nums[j]:
                    nums[j+1] = nums[j]
                    j -= 1
                # 跳出循环的两种情况:
                # 1.遇到一个小于或等于cur_num的数字，跳出循环，
                # curr_num就坐到它后面
                # 2.已经走到数列头部，仍然没有遇到小于或等于cur_num的数字，
                # 也会跳出循环，此时j等于-1，cur_num就坐到数列头部
                nums[j+1] = cur_num
            return nums
    ```
- 空间复杂度O(1)，时间复杂度O(n^2)
## 希尔排序
    ```python
    # 执行用时：568 ms, 在所有 Python3 提交中击败了5.08%的用户
    # 内存消耗：17.9 MB, 在所有 Python3 提交中击败了58.54%的用户
    class Solution:
        def get_gaps(self, length):
            gaps = []
            gap = length // 2
            while gap > 0:
                gaps.append(gap)
                gap //= 2
            return gaps

        def sortArray(self, nums: List[int]) -> List[int]:
            length = len(nums)
            # 间隔序列
            for gap in self.get_gaps(length):
                # 分组
                for group_index in range(gap):
                    # 插入排序
                    for cur_index in range(group_index+gap, length, gap):
                        cur_num = nums[cur_index]
                        pre_index = cur_index - gap
                        while pre_index >= group_index and cur_num < nums[pre_index]:
                            nums[pre_index + gap] = nums[pre_index]
                            pre_index -= gap
                        nums[pre_index + gap] = cur_num
            return nums
    ```
- 空间复杂度O(1)，时间复杂度O(n^1.3)，最坏时间复杂度O(n^2)
## 堆排序
- 根节点下标视为0的完全二叉树的3个性质
    - 1.对于完全二叉树中的第 i 个数，它的左孩子下标是：`left = 2i + 1`
    - 2.对于完全二叉树中的第 i 个数，它的右孩子下标是：`right = left + 1 = 2i + 2 = 2(i+1)`
    - 3.对于n个元素的完全二叉树(n >= 2)，它的最后一个非叶子结点的下标：$\lfloor n / 2 \rfloor -1$，等价于该结点的父节点下标
    ```python
    #执行用时：1052 ms, 在所有 Python3 提交中击败了5.09%的用户
    #内存消耗：20.1 MB, 在所有 Python3 提交中击败了6.51%的用户
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            # 构建初始大顶堆
            nums = self.build_max_heap(nums)
            for i in range(len(nums)-1, 0, -1):
                # 将最大值交换到数组最后
                nums[0], nums[i] = nums[i], nums[0]
                # 调整剩余数组，使其满足大顶堆
                nums = self.max_heapify(nums, 0, i)
            return nums
        
        def build_max_heap(self, nums) -> List[int]:
            # 从最后一个非叶子结点开始调整大顶堆，
            # 最后一个非叶子结点的下标是 len(nums) // 2 - 1
            for i in range(len(nums)//2-1, -1, -1):
                nums = self.max_heapify(nums, i, len(nums))
            return nums
        
        # 调整大顶堆，第三个参数表示剩余未排序的数字的数量，即剩余堆的大小
        def max_heapify(self, nums, i, heap_size) -> List[int]:
            # 左右子节点下标
            l, r = 2 * i + 1, 2 * i + 2
            # 找到根节点、左右子树结点中的最大值下标
            largest = i
            if l < heap_size and nums[l] > nums[largest]:
                largest = l
            if r < heap_size and nums[r] > nums[largest]:
                largest = r
            if largest != i:
                # 将最大值交换为根结点
                nums[i], nums[largest] = nums[largest], nums[i]
                # 再次调整交换数字后的大顶堆
                nums = self.max_heapify(nums, largest, heap_size)
            return nums
    ```
- 初始化堆(build_max_heap)的时间复杂度是O(n)，重建堆(max_heapify)的时间复杂度为O(nlogn)，总时间复杂度O(nlogn)
- 空间复杂度O(1)
## 快排
    ```python
    # 执行用时：176 ms, 在所有 Python3 提交中击败了75.38%的用户
    # 内存消耗：18 MB, 在所有 Python3 提交中击败了40.91%的用户
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            self.quicksort(nums, 0, len(nums)-1)
            return nums
        
        def quicksort(self, nums, start, end):
            # 如果区域内少于2个，退出递归
            if start >= end:
                return
            mid = self.partition(nums, start, end)
            self.quicksort(nums, start, mid-1)
            self.quicksort(nums, mid+1, end)
        
        def partition(self, nums, start, end):
            # 避免有序数组
            random_index = random.randint(start, end)
            nums[start], nums[random_index] = nums[random_index], nums[start]
            pivot = nums[start]
            while start < end:
                while start < end and pivot <= nums[end]:
                    end -= 1
                nums[start] = nums[end]
                while start < end and nums[start] <= pivot:
                    start += 1
                nums[end] = nums[start]
            nums[start] = pivot
            return start
    ```
- 平均时间复杂度为 O(nlogn)，最坏的时间复杂度为 O(n^2)，空间复杂度与递归的层数有关，每层递归会生成一些临时变量，所以空间复杂度为 O(logn) ~ O(n)，平均空间复杂度为 O(logn)

## 归并排序(递归写法)
    ```python
    # 执行用时：252 ms, 在所有 Python3 提交中击败了32.87%的用户
    # 内存消耗：19 MB, 在所有 Python3 提交中击败了15.42%的用户
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            if len(nums) <= 1:
                return nums
            mid = len(nums) // 2
            a = self.sortArray(nums[:mid])
            b = self.sortArray(nums[mid:])
            return self.merge(a,b)
        
        def merge(self, a, b):
            merged = []
            i, j = 0, 0
            while i < len(a) and j < len(b):
                if a[i] <= b[j]:
                    merged.append(a[i])
                    i += 1
                else:
                    merged.append(b[j])
                    j += 1
            merged.extend(a[i:])
            merged.extend(b[j:])
            return merged
    ```
- 时间复杂度是 O(nlogn)，因拆分数组的过程中，会将数组拆分 logn 次，每层执行的比较次数都约等于 n 次，空间复杂度是 O(n)，主要占用空间的就是我们在排序前创建的长度为 n 的数组

## 归并排序(非递归写法)
    ```python
    #执行用时：276 ms, 在所有 Python3 提交中击败了24.61%的用户
    #内存消耗：17.9 MB, 在所有 Python3 提交中击败了60.92%的用户
    class Solution:
        def sortArray(self, nums: List[int]) -> List[int]:
            self.nums = nums
            self.merge_sort(0, len(nums)-1)
            return self.nums
        
        def merge_sort(self, low, high):
            if low >= high:
                return
            mid = (low + high) // 2
            self.merge_sort(low, mid)
            self.merge_sort(mid+1, high)
            self.merge(low, mid, high)
        
        def merge(self, low, mid, high):
            # 只需要拷贝前半份
            merged = self.nums[low:mid+1]
            i, i1, i2 = low, 0, mid+1
            while i1 < len(merged) and i2 <= high:
                if merged[i1] <= self.nums[i2]:
                    self.nums[i] = merged[i1]
                    i, i1 = i+1, i1+1
                else:
                    self.nums[i] = self.nums[i2]
                    i, i2 = i+1, i2+1
            while i1 < len(merged):
                self.nums[i] = merged[i1]
                i, i1 = i+1, i1+1
            while i2 <= high:
                self.nums[i] = self.nums[i2]
                i, i2 = i+1, i2+1
    ```
- 时间复杂度是 O(nlogn)，空间复杂度是 O(n)