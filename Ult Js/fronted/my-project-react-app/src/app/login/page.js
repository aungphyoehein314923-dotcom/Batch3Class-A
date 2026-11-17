import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Ultimate Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="email" placeholder="m@example.com" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Sign In</Button>
        </CardContent>
      </Card>
    </div>
  );
}