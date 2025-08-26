
import { assertEquals } from "jsr:@std/assert";

type User = {
  id: number;
  name: string;
  role: "admin" | "user" | "guest";
};

const users: User[] = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "user" },
  { id: 4, name: "Charlie", role: "admin" },
];

function groupUsersByProperty(users: User[], property: keyof User): Record<string, User[]> {
  // todo: implement this
  return {}; 
}

Deno.test("groupUsersByProperty", () => {
    assertEquals(groupUsersByProperty(users, "role"), {
        admin: [users[0], users[3]],
        user: [users[1], users[2]],
    });
});

console.log(groupUsersByProperty(users, "role"));