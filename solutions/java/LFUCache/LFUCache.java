class ListNode {
    Integer key;//存在key
    Integer count;//记录节点使用次数
    ListNode next;//下一个节点

    public ListNode(Integer key, Integer count) {
        this.key = key;
        this.count = count;
        this.next = null;
    }
}

class LFUCache {

    private int n;//缓存大小
    private Map<Integer, Integer> map;//作缓存，记录key-value
    private Map<Integer, Integer> fq_map;
    private ListNode fq_list;

    public LFUCache(int capacity) {
        this.n = capacity;
        this.map = new HashMap<>();
        this.fq_map = new HashMap<>();
        this.fq_list = new ListNode(0, 0);
    }

    public int get(int key) {
        if (!map.containsKey(key)) {
            return -1;
        }
        updateList(key);
        return map.get(key);
    }

    private void updateList(int key) {
        int count = fq_map.get(key);
        ListNode p = fq_list;
        //遍历线性表并更新key的使用次数
        while (null != p) {
            if (null != p.next) {
                if (p.next.key == key) {
                    //当前查询的key处于线性表最后一个节点或使用次数更新后仍小于下一个节点
                    if (null == p.next.next || p.next.next.count > count + 1) {
                        p.next.count = count + 1;
                        break;
                    } else {//移除该节点继续下一轮比较
                        p.next = p.next.next;
                        p = p.next;
                    }
                } else {
                    if (p.next.count <= count + 1) {//节点继续后移直到末尾或满足条件
                        p = p.next;
                    } else {//找到合适位置，插入中间
                        ListNode nl = new ListNode(key, count + 1);
                        nl.next = p.next;
                        p.next = nl;
                        break;
                    }
                }
            } else {//到达末尾，新增节点
                p.next = new ListNode(key, count + 1);
                break;
            }
        }
        fq_map.put(key, count + 1);
    }

    public void put(int key, int value) {
        if (n <= 0) {
            return;
        }
        //key存在的情况下更新缓存及线性表
        if (map.containsKey(key)) {
            map.put(key, value);
            updateList(key);
        } else if (map.size() < n) {//key不存在且缓存未满的情况，更新缓存及线性表
            map.put(key, value);
            fq_map.put(key, 1);
            if (map.size() == 1) {
                fq_list.next = new ListNode(key, 1);
            } else {
                ListNode p = fq_list;
                while (null != p) {//找到合适的位置插入新节点
                    if (null != p.next) {
                        if (p.next.count < 2) {
                            p = p.next;
                        } else {
                            ListNode nl = new ListNode(key, 1);
                            nl.next = p.next;
                            p.next = nl;
                            break;
                        }
                    } else {
                        p.next = new ListNode(key, 1);
                        break;
                    }
                }
            }
        } else {//删除线性表第一个节点并更新
            int dk = fq_list.next.key;
            fq_list.next = fq_list.next.next;
            map.remove(dk);
            fq_map.remove(dk);
            map.put(key, value);
            fq_map.put(key, 1);
            ListNode p = fq_list;
            while (null != p) {
                if (null != p.next) {
                    if (p.next.count < 2) {
                        p = p.next;
                    } else {
                        ListNode nl = new ListNode(key, 1);
                        nl.next = p.next;
                        p.next = nl;
                        break;
                    }
                } else {
                    p.next = new ListNode(key, 1);
                    break;
                }
            }
        }
    }
}