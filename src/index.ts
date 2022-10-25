const div = (a: number, b: number, rounding?: true): number => {
  const res = a / b;

  if (rounding) {
    return Math.round(res);
  }

  return res;
}

div(15, 4, true);
div(15, 3);
div(10, 2);

type Student = {
  firstName: string;
  lastName: string;
  age: number;
  bornCity?: string;
};

type HttpResponsePanding = {
  status: 'panding';
};

type HttpResponseSuccess = {
  status: 'success';
  data?: [];
};

type HttpResponseFailed = {
  status: 'failed';
  error?: string;
};

type HttpResponse = 
  | HttpResponsePanding
  | HttpResponseSuccess
  | HttpResponseFailed;

const fatchData = (res: HttpResponse): void => {
  if (res.status === 'panding') {
    res.status
  }

  if (res.status === 'success') {
    res.status
    res.data
  }

  if (res.status === 'failed') {
    res.status
    res.error
  }
};