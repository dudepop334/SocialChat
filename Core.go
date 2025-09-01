// auth.go
package main

import (
  "fmt"
  "net/http"
)

func loginHandler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintln(w, "Login successful (dummy)")
}

func main() {
  http.HandleFunc("/login", loginHandler)
  fmt.Println("Go Auth service running on port 4000")
  http.ListenAndServe(":4000", nil)
}
