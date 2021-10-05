type MyPick<T, K> = {
    [P in (keyof T & K)] : T[P]
}
