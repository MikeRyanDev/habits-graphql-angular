import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export function gql(stringPieces: TemplateStringsArray): string {
  return stringPieces.join("");
}

@Injectable({ providedIn: "root" })
export class GraphQLService {
  constructor(readonly http: HttpClient) {}

  fetch(query: string, variables: object = {}) {
    return this.http.post("/graphql", { query, variables });
  }
}
