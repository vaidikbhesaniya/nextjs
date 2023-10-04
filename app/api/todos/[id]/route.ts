import { request } from 'http';
import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {


    const id = request.url.slice(request.url.lastIndexOf("/") + 1)
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
    const todo: Todo = await res.json()

    if (!todo.id) return NextResponse.json({ "messages": "Todo not found" });

    return NextResponse.json(todo)
}
