import { request } from 'http';
import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY = process.env.DATA_API_KEY as string;

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL);
    const todos: Todo[] = await res.json()

    return NextResponse.json(todos)
}


export async function DELETE(request: Request) {
    const { id }: Partial<Todo> = await request.json();

    if (!id) return NextResponse.json({ "message": "Todo id is required" });


    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "API-KEY": API_KEY
        }
    })

    return NextResponse.json({ "message": `TODO ${id} deleted` })
}

export async function POST(request: Request) {
    const { userId, title }: Partial<Todo> = await request.json();

    if (!userId || !title) return NextResponse.json({ "message": "Missing requered data required" });


    const res = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "API-KEY": API_KEY
        },
        body: JSON.stringify({
            userId, title, completed: false
        })
    })
    const newTodo: Todo = await res.json()
    return NextResponse.json(newTodo)
}
export async function PUT(request: Request) {
    const { userId, title, id, completed }: Partial<Todo> = await request.json();

    if (!userId || !title || !id) return NextResponse.json({ "message": "we have a problem" });



    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "API-KEY": API_KEY
        },
        body: JSON.stringify({
            userId, title, completed
        })
    })
    const updatedtodo: Todo = await res.json()
    return NextResponse.json(updatedtodo)
}
