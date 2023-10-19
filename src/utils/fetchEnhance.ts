import {licenceKeyRef, userUUID} from '@/ui.state';
import {HOST_URL} from '@/utils/hostUrl';

export async function fetchPost(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return response.json()
}
export async function fetchMJPost(url = '', data = {}, apiSecretFromURL: string | null) {
    const response = await fetch("/mj-api" + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "mj-api-secret": apiSecretFromURL??'',
      },
      body: JSON.stringify(data),
    });
    return response.json()
}


export async function fetchMJGet(url = '',apiSecretFromURL: string | null) {
    const response = await fetch("/mj-api" + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mj-api-secret": apiSecretFromURL ?? "",
      },
    });
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

export async function fetchPut(url = '', data = {}) {
  const response = await fetch('/mj-api'+url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return response.json()
}

export async function fetchDelete(url = '', data = {}) {
    const response = await fetch('/mj-api'+url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    return response.json()
}


export async function fetchGet(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-License-Key':licenceKeyRef.value ,
            'X-UUID': userUUID.value
        },
    })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}
