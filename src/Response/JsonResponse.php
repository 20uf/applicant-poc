<?php

/*
 * This file is part of the Certificationy Applicant project.
 *
 * (c) Michael COULLERET <michael.coulleret@gmail.com>
 * (c) Mickaël Andrieu <andrieu.travail@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Applicant\Response;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Zend\Diactoros\Response;
use Zend\Diactoros\Stream;

/**
 * Json response.
 */
class JsonResponse extends Response
{
    use Response\InjectContentTypeTrait;

    /**
     * {@inheritdoc}
     */
    public function __construct($body, $status = 200, array $headers = [])
    {
        $headers = $this->injectContentType('application/json', $headers);

        $serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
        $json = $serializer->serialize($body, 'json');

        $body = $this->createBodyFromJson($json);

        parent::__construct($body, $status, $headers);
    }

    /**
     * @param string $json
     *
     * @return Stream
     */
    private function createBodyFromJson($json)
    {
        $body = new Stream('php://temp', 'wb+');
        $body->write($json);
        $body->rewind();

        return $body;
    }
}
