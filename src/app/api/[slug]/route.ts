import { firebaseDB } from "@/firebase/firebase";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const querySnapshot = await getDocs(
            collection(firebaseDB, "system-params")
        );
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const docRef = await addDoc(
            collection(firebaseDB, "system-params"),
            body
        );
        return NextResponse.json({ docRef });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: any) {
    const { id } = params;

    try {
        const docRef = doc(firebaseDB, "system-params", id);

        await deleteDoc(docRef);

        return NextResponse.json({ message: "Document successfully deleted" });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
