import { AxiosError } from "axios";
import { Endpoints } from "../../api/endpoints";
import { Api } from "../../api/axios";

interface IResponse {
  name: string;
  username: string;
  reputation: number;
  avatar: string;
}

export const getBestContributors = async () => {
  try {
    const getData = await Api.get<IResponse[]>(Endpoints.GET_EST_CONTIBUTORS);
    
    return getData.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  }
};
