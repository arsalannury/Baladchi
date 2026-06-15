import { AxiosError } from "axios";
import { Endpoints } from "../../api/endpoints";
import { Api } from "../../api/axios";

interface IResponse {
  id: string;
  title: string;
  content: string;
  author: {
    username: string;
    name: string;
    avatar: string;
    reputation: number;
    badge: string;
  };
  topics: string[];
  votes: number;
  answers: number;
  views: number;
  timestamp: string;
  trending?: boolean;
}

export const getQuestions = async () => {
  try {
    const getData = await Api.get<IResponse[]>(Endpoints.GET_QUESTIONS);

    return getData.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
};
