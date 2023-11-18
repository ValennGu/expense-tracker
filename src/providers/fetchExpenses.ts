import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { Expense } from '../models/expense';
import { db } from '../database/firestore';
import { monthsOrderComparator } from '../utils/monthsOrderComparator';

export const fetchFBExpenses = async (
  year: string,
  month: string,
): Promise<{ income: number; expenses: Expense[] }> => {
  const yearRef = collection(db, year);
  const monthRef = doc(yearRef, month);

  try {
    const data = (await getDoc(monthRef)).data() as { income: number; expenses: Expense[] };

    return data;
  } catch (err) {
    console.error('Unable to fetch data from server');

    return { income: 0, expenses: [] };
  }
};

export const fetchFBMonths = async (year: string): Promise<string[]> => {
  const yearRef = collection(db, year);

  try {
    const docs = (await getDocs(yearRef)).docs;
    const ids = docs.map((element) => element.id);
    const orderedIds = ids.sort(
      (a, b) => monthsOrderComparator.indexOf(a) - monthsOrderComparator.indexOf(b),
    );

    return orderedIds;
  } catch (err) {
    console.error('There has been an error when fetch documents from the server.');

    return [];
  }
};

export const addFBExpense = async (year: string, month: string, expense: Expense) => {
  const yearRef = collection(db, year);
  const monthRef = doc(yearRef, month);

  try {
    await updateDoc(monthRef, { expenses: arrayUnion(expense) });
  } catch (err) {
    console.error('Unable to create new expense in the server');
  }
};

export const removeFBExpense = async (year: string, month: string, expense: Expense) => {
  const yearRef = collection(db, year);
  const monthRef = doc(yearRef, month);

  try {
    await updateDoc(monthRef, { expenses: arrayRemove(expense) });
  } catch (err) {
    console.error('Unable to delete new expense from the server');
  }
};
