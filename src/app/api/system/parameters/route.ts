import { firebaseDB } from "@/firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
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

// export async function POST(req: NextRequest) {
//     const { pathname } = new URL(req.url);

//     const endpoint = pathname.replace("/api", "");

//     try {
//         const formData = await req.json();
//         const data = await postData(req, endpoint, formData);
//         return NextResponse.json(data);
//     } catch (error: any) {
//         return NextResponse.json({ message: error.message }, { status: 500 });
//     }
// }
