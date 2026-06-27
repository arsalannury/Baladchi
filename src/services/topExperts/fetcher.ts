import { AxiosError } from "axios";
import { Endpoints } from "../../api/endpoints";
import { Api } from "../../api/axios";

interface IResponseExperts {
  username: string;
  name: string;
  score: number;
  avatar: string;
  reputation: number;
}

export const getTopExperts = async () => {
  try {
    const getData = await Api.get<IResponseExperts[]>(
      `${Endpoints.GET_TOP_EXPERTS}`,
    );

    return getData.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
};
