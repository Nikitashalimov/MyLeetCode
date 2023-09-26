/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function increasingBST(root: TreeNode | null): TreeNode | null {
    // Инициализируем пустое дерево, которое будет упорядоченным.
    let newRoot: TreeNode | null = null;
    // Указатель на текущий узел.
    let current: TreeNode | null = newRoot;

    // Вспомогательная рекурсивная функция для обхода дерева.
    function inOrder(node: TreeNode | null) {
        if (!node) return;

        // Рекурсивно обходим левое поддерево.
        inOrder(node.left);

        // Создаем новый узел для упорядоченного дерева.
        const newNode = new TreeNode(node.val);
        
        if (!newRoot) {
            // Если новое дерево пустое, устанавливаем новый узел как корень.
            newRoot = newNode;
            current = newRoot;
        } else {
            // Иначе, присоединяем новый узел справа к текущему узлу.
            current!.right = newNode;
            // Перемещаем указатель current на новый узел.
            current = newNode;
        }

        // Рекурсивно обходим правое поддерево.
        inOrder(node.right);
    }

    // Начинаем обход в порядке "in-order" с корневого узла.
    inOrder(root);

    // Возвращаем новое упорядоченное дерево.
    return newRoot;
}