import { Indexable } from "../models/indexable.model";

export abstract class Indexor<T extends Indexable> {

    public sortByIndex(list: T[]): T[] {
        return list
            .sort(
                (n1: T, n2: T) =>
                    n1.index - n2.index
            );
    }

}