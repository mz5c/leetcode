/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	return !root || xxx(root.left, root.right);
};
var xxx = function(l, r) {
    if (l) {
        if (r) {
            if (l.val !== r.val) {
                return false;
            }
            return xxx(l.left, r.right) && xxx(l.right, r.left);
        }
        return false;
    } else {
        if (r) {
            return false;
        }
        return true;
    }
};
